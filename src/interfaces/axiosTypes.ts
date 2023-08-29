// 회원가입
export interface SignUpProps {
  nickname: string
  email: string
  password: string
}

// 이메일 인증번호 발송
export interface authCodeProps {
  email: string
}

// 인증번호
export interface validationProps {
  code: string
}
