import { getRequest } from './instance'

// 유저 정보 조회
export const getUserInfo = async (nickname: string | undefined) => {
  return getRequest(`/api/userinfo/${nickname}`)
}

// 인게임 정보 보기
export const getIngame = async (nickname: string | undefined) => {
  return getRequest(`/api/userinfo/ingame/${nickname}`)
}
