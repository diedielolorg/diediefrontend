import { useState, useCallback } from 'react'
import { useInputProps } from '../interfaces/CustomTypes'

const useInput = (initialValue: useInputProps) => {
  const [data, setData] = useState(initialValue)

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      if (name === 'ConfirmNumber') {
        if (value.length <= 4) {
          // 최대 4글자까지만 허용
          setData({ ...data, [name]: value })
        }
      } else if (name === 'nickName') {
        if (value.length <= 12) {
          setData({ ...data, [name]: value })
        }
      } else {
        setData({ ...data, [name]: value })
      }
    },
    [data],
  )
  return [data, handler] as const
}

export default useInput
