import { api, deleteRequest } from '../instance'
import { MyReportResponse } from './report'

// 내가 등록한 신고 조회
export const getMyReport = async (page: number): Promise<MyReportResponse> => {
  const response = await api.get(`/api/users/mypage/myreport?page=${page}&pageSize=5`)
  return response.data
}

// 신고 삭제
export const DeleteReport = async (id: number) => {
  return deleteRequest(`/api/report/${id}`)
}
