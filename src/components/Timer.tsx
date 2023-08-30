import React, { memo, useEffect, useState } from 'react'
import { TimeFormatter, timerProps } from '../interfaces/TimerTypes'

const Timer = ({ timeLimit, onTimerEnd, isBtnOpen }: timerProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let id: NodeJS.Timeout

    if (!isBtnOpen) {
      setCount(timeLimit) // 타이머를 초기화

      id = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount > 0) {
            return prevCount - 1
          }
          clearInterval(id)
          onTimerEnd()
          return prevCount
        })
      }, 1000)
    }

    return () => {
      clearInterval(id)
    }
  }, [timeLimit, onTimerEnd, isBtnOpen])

  const formatTime: TimeFormatter = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return <p>{formatTime(count)}</p>
}

export default memo(Timer)
