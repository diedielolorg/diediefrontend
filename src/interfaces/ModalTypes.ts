// Ingame.tsx
export interface UserListDivProps {
  $position: string
}

// ZoomImg.tsx
export interface ZoomImgProps {
  $width?: number | null
  $height?: number | null
}

// SnackBar.ts
export interface snackBar {
  type?: string
}

// Modal.ts
export interface ModalProps {
  type?: 'input' | 'confirm'
  title?: string
  subTitle?: string | null
  placeholder?: string
  maxLen?: number
  primaryBtn?: {
    children: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  } | null
  secondaryBtn?: {
    children: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  } | null
}
