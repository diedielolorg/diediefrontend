export interface timerProps {
  timeLimit: number
  reTimeLimit: number
  onTimerEnd: () => void
}

export interface TimeFormatter {
  (time: number): string
}
