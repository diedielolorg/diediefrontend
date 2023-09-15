import { SearchProps } from '../interfaces/MainTypes'
import { getRequest } from './instance'

// 소환사 검색
export const search = async (props: SearchProps) => {
  return getRequest(`/api/main/search?summonerName=${props.summonername}`)
}
