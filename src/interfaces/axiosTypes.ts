// POST컴포넌트
export interface PostRequest {
  [key: string]: string
}

// 회원가입
export interface SignUpProps {
  nickname: string
  email: string
  password: string
}

// 이메일 인증번호 발송
export interface AuthCodeProps {
  email: string
}

// 인증번호
export interface ValidationProps {
  code: string
}

// 닉네임 중복확인
export interface NicknameConfirmProps {
  nickname: string
}

// 로그인
export interface LoginProps {
  email: string
  password: string
}
