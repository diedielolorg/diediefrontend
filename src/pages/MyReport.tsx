import { useMutation, useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { styled } from 'styled-components'
import { DeleteReport, getMyReport } from '../axios/reportService'
import { pageState } from '../recoil/PageAtom'
import { ReportList } from '../components/common'

const MyReport = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { page } = useRecoilValue(pageState)
  const { data, isError } = useQuery(['getMyReport', { page }], () => getMyReport(page))
  // if (isError) navigate('/error')

  const DeleteReportMutation = useMutation(DeleteReport, {
    onSuccess: () => {},
    onError: (error) => {},
  })
  const deleteReportItemBtnHandler = (id: number) => {
    // DeleteReportMutation.mutate(id)
    alert(`${id}삭제버튼 눌림`)
  }
  console.log(data?.myReportData.myReportCount)
  return (
    <WrapDiv>
      <TitleDiv>
        <h1>{t('내가 등록한 신고')}</h1>
        <p>{data?.myReportData.myReportCount}</p>
      </TitleDiv>
      <div>
        {data && data?.myReportData.myReportCount > 0 ? (
          <ReportList
            reportlist={data.myReportData.reportData}
            reportlength={data.myReportData.myReportCount}
            onButtonClick={deleteReportItemBtnHandler}
          />
        ) : (
          <NoneListDiv>{t('등록된 신고가 없습니다.')}</NoneListDiv>
        )}
      </div>
    </WrapDiv>
  )
}

export default MyReport

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1043px;
  padding-top: 37px;
  padding-bottom: 116px;
`
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 46px;
  padding-bottom: 20px;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.gray.SF};
  h1,
  p {
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
  }
  h1 {
    color: ${({ theme }) => theme.color.white};
  }
  p {
    color: ${({ theme }) => theme.green.basic};
  }
`
const NoneListDiv = styled.div`
  margin: 50px 0;
  color: ${({ theme }) => theme.gray.AE};
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`
