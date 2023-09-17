// Potal.tsx
export interface PotalProps {
  type?: string
  src?: string
  snackBar?: string
  nickname?: string
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
  $category: string
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
  reportlength: number
  reportlist: {
    category: string
    reportCapture: string[]
    reportDate: string
    reportId: number
    reportPayload: string
    summonerName: string
    summonerPhoto: string
    createdAt: string
  }[]
  onButtonClick?: (id: number) => void
}

// ReportList.tsx
export interface ToggleMoreBtnState {
  [key: number]: boolean
}

// ReportList.tsx
export interface ReportContentProps {
  $status?: string
}
