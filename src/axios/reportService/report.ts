// 내가 등록한 신고
export interface MyInfoParamType {
  page: number
}

export interface MyReportResponse {
  myReportData: {
    myReportCount: number
    reportData: {
      reportId: number
      summonerName: string
      summonerPhoto: string
      category: string
      reportPayload: string
      reportCapture: string[]
      reportDate: string
      createdAt: string
    }[]
  }
}
