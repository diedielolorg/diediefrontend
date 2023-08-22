import { useState, useCallback } from 'react'
import { useInputProps } from '../interfaces/CustomTypes'

const useInput = (initialValue: useInputProps) => {
  const [data, setData] = useState(initialValue)

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      setData({ ...data, [name]: value })
    },
    [data],
  )
  return [data, handler] as const
}
export default useInput
