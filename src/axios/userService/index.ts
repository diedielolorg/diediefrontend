import { UserInfo } from '../../interfaces/axiosTypes'
import { deleteRequest, putRequest } from '../instance'

// 인증번호 재발송
export const UserInfoEdit = async (props: UserInfo) => {
  return putRequest('/api/users/mypage/myreport', {
    nickname: props.nickname,
    password: props.password,
  })
}

// 인증번호 재발송
export const withdrawal = async () => {
  return deleteRequest('/api/users')
}
