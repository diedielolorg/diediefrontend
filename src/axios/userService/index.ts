import { UserInfo } from '../../interfaces/axiosTypes'
import { deleteRequest, putRequest } from '../instance'

// 닉네임변경
export const UserInfoEdit = async (props: UserInfo) => {
  return putRequest('api/users/mypage/myinfo', {
    nickname: props.nickname,
  })
}

// 회원탈퇴
export const withdrawal = async () => {
  return deleteRequest('/api/users')
}
