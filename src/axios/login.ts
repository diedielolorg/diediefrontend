import { AuthCodeProps, SignUpProps, ValidationProps } from '../interfaces/axiosTypes'
import api from './instance'
import { postRequest } from './crud'

// 이메일 인증
export const authCode = async (props: AuthCodeProps) => {
  return postRequest('/api/users/authcode', { email: props.email })
}

// 인증번호
export const validation = async (props: ValidationProps) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(`/api/users/authcodevalidation`, {
      code: props.code,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// 회원가입
export const signUp = async (props: SignUpProps) => {
  return postRequest('/api/users/signup', { nickname: props.nickname, email: props.email, password: props.password })
}
