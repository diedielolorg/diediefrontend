// POST컴포넌트
export interface RequestType {
  [key: string]: string | number | boolean
}

// 회원가입
export interface SignUpProps {
  nickname: string
  email: string
  password: string
  emailVerified: boolean
  nicknameVerified: boolean
}

// 이메일 인증번호 발송
export interface AuthCodeProps {
  email: string
}

// 인증번호
export interface ValidationProps {
  email: string
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

// 유저정보 변경
export interface UserInfo {
  nickname: string
  password: string
}
