// Button.tsx
export interface BtnProps {
  children?: string
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  color?: 'light' | 'basic' | 'gray'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
  borderRadius?: number
  src?: string
  alt?: string
}

// Tier.jsx
export interface TierProps {
  tier?: string
  rank?: string
}
