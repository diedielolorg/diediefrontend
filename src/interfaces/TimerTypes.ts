export interface timerProps {
  timeLimit: number
  onTimerEnd: () => void
}

export interface TimeFormatter {
  (time: number): string
}
