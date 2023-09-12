import {
  AuthCodeProps,
  LoginProps,
  NicknameConfirmProps,
  SignUpProps,
  ValidationProps,
} from '../../interfaces/axiosTypes'
import { getRequest, postRequest } from '../instance'

// 이메일 인증
export const authCode = async (props: AuthCodeProps) => {
  return postRequest('/api/users/authcode', { email: props.email })
}

// 인증번호 재발송
export const authCodeResend = async (props: AuthCodeProps) => {
  return postRequest('/api/users/authcode', { email: props.email })
}

// 인증번호
export const validation = async (props: ValidationProps) => {
  return postRequest('/api/users/authcodevalidation', {
    code: props.code,
    email: props.email,
  })
}

// 회원가입
export const signUp = async (props: SignUpProps) => {
  return postRequest('/api/users/signup', {
    nickname: props.nickname,
    email: props.email,
    password: props.password,
    emailVerified: props.emailVerified,
    nicknameVerified: props.nicknameVerified,
  })
}

// 닉네임 중복확인
export const nicknameConfirm = async (props: NicknameConfirmProps) => {
  return postRequest('/api/users/duplicationcheck', { nickname: props.nickname })
}

// 로그인
export const login = async (props: LoginProps) => {
  return postRequest('/api/users/login', {
    email: props.email,
    password: props.password,
  })
}

// 카카오 로그인
export const kakaoLogin = async () => {
  return getRequest('/api/users/kakaoLoginLogic')
}
