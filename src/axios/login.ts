import { AuthCodeProps, SignUpProps, ValidationProps } from '../interfaces/axiosTypes'
import { postRequest } from './instance'

// 이메일 인증
export const authCode = async (props: AuthCodeProps) => {
  return postRequest('/api/users/authcode', { email: props.email })
}

// 인증번호
export const validation = async (props: ValidationProps) => {
  return postRequest('/api/users/authcode', { code: props.code })
}

// 회원가입
export const signUp = async (props: SignUpProps) => {
  return postRequest('/api/users/signup', { nickname: props.nickname, email: props.email, password: props.password })
}
