import React, { useEffect, useState } from 'react'
import { TimeFormatter, timerProps } from '../interfaces/TimerTypes'

const Timer = ({ timeLimit, onTimerEnd }: timerProps) => {
  const [count, setCount] = useState(timeLimit)

  useEffect(() => {
    setCount(timeLimit) // 타이머를 초기화

    const id = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1
        }
        clearInterval(id)
        if (prevCount === 0) {
          onTimerEnd() // 타이머 종료 시 콜백 함수 호출
        }
        return prevCount
      })
    }, 1000)

    return () => clearInterval(id)
  }, [timeLimit, onTimerEnd]) // timeLimit과 key를 의존성 배열에 추가

  const formatTime: TimeFormatter = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return <p>{formatTime(count)}</p>
}

export default Timer
