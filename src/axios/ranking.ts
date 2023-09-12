import { getRequest } from './instance'
import { RankingParamType } from '../interfaces/rankingTypes'

// 랭킹 월별 조회
export const getRankingInfo = async ({ month }: RankingParamType) => {
  return getRequest(`/api/rank?Date=${month}`)
}
