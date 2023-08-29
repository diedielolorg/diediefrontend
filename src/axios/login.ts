import { SignUpProps, authCodeProps, validationProps } from '../interfaces/axiosTypes'
import api from './instance'

// 이메일 인증
export const authCode = async (props: authCodeProps) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(`/api/users/authcode`, {
      email: props.email,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// 인증번호
export const validation = async (props: validationProps) => {
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
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post(`/api/users/signup`, {
      nickname: props.nickname,
      email: props.email,
      password: props.password,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
