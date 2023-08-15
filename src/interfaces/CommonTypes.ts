// Potal.tsx
export interface PotalProps {
  type?: string
  onclick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

// Button.tsx
export interface BtnProps {
  children?: string
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  color?: 'light' | 'lime' | 'basic' | 'gray'
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// Badge.tsx
export interface BadgeProps {
  children?: string
  category?: string
}

// Image.tsx
export interface ImgProps {
  width?: number
  height?: number
  border?: number
  src?: string
  alt?: string
}

// Tier.tsx
export interface TierProps {
  tier?: string
  rank?: string
}
