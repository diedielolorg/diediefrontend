// Potal.tsx
export interface PotalProps {
  type?: string
  src?: string
  snackBar?: string
  onclick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}

// Button.tsx
export interface BtnProps {
  children?: string
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
  color?: 'light' | 'lime' | 'basic' | 'gray'
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

// Badge.tsx
export interface BadgeProps {
  $category?: string
}

// Image.tsx
export interface ImgProps {
  width?: number
  height?: number
  $border?: number
  src?: string
  alt?: string
  $zoom?: string
}

// Tier.tsx
export interface TierProps {
  $tier?: string
  $rank?: string
}

// ReportList.tsx
export interface ReportListProps {
  reportlist: {
    reportId: number
    cussWord: string[]
    reportDate: string
    reportPayload: string
    reportCapture: string[]
  }[]
}

// ReportList.tsx
export interface ToggleMoreBtnState {
  [key: number]: boolean
}

// ReportList.tsx
export interface ReportContentProps {
  $status?: string
}
