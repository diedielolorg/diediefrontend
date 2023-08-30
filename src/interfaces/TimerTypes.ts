export interface timerProps {
  timeLimit: number
  isBtnOpen: boolean
  onTimerEnd: () => void
}

export interface TimeFormatter {
  (time: number): string
}
