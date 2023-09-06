import { getRequest } from './instance'
import { UserInfoParamType } from '../interfaces/UserInfoTypes'

// 유저 정보 조회
export const getUserInfo = async ({ nickname, page }: UserInfoParamType) => {
  return getRequest(`/api/userinfo/${nickname}/?page=${page}`)
}

// 인게임 정보 보기
export const getIngame = async (nickname: string | undefined) => {
  return getRequest(`/api/userinfo/ingame/${nickname}`)
}
