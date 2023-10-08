import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { styled } from 'styled-components'
import { DeleteReport, getMyReport } from '../axios/reportService'
import { pageState } from '../recoil/PageAtom'
import { Portal, ReportList } from '../components/common'
import SnackBarAtom from '../recoil/SnackBarAtom'
import ModalAtom from '../recoil/ModalAtom'

const MyReport = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { page } = useRecoilValue(pageState)
  const [isSnackbar, setIsSnackBar] = useRecoilState(SnackBarAtom)
  const [modal, setModal] = useRecoilState(ModalAtom)

  const { data } = useQuery(['getMyReport', { page }], () => getMyReport(page), {
    onError: () => {
      navigate('/error')
    },
  })
  const DeleteReportMutation = useMutation(DeleteReport, {
    onSuccess: () => {
      setModal({ ...modal, open: false })
      setIsSnackBar({ open: true })
    },
    onError: (error) => {},
  })
  const deleteReportItemBtnHandler = (id: number) => {
    setModal({
      ...modal,
      open: true,
      title: '삭제 사유를 적어주세요.',
      placeholder: '최소 5자 이상 적어주세요.',
      maxLen: 200,
      primaryBtn: {
        children: '완료하기',
        onClick: () => {
          DeleteReportMutation.mutate(id)
        },
      },
      secondaryBtn: {
        children: '취소',
        onClick: () => {
          setModal({ ...modal, open: false })
        },
      },
    })
  }
  return (
    <WrapDiv>
      <TitleDiv>
        <h1>{t('내가 등록한 신고')}</h1>
        <p>{data?.myReportData.myReportCount}</p>
      </TitleDiv>
      <MyReportList>
        {data && data?.myReportData.myReportCount > 0 ? (
          <ReportList
            reportlist={data.myReportData.reportData}
            reportlength={data.myReportData.myReportCount}
            onButtonClick={deleteReportItemBtnHandler}
          />
        ) : (
          <NoneListDiv>{t('등록된 신고가 없습니다.')}</NoneListDiv>
        )}
        {isSnackbar.open && <Portal type={'SnackBar'} snackBar={'success'} />}
        {modal.open && <Portal type={'modal'} modal={'input'} />}
      </MyReportList>
    </WrapDiv>
  )
}

export default MyReport

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
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
const MyReportList = styled.div`
  display: flex;
  flex-direction: column;
`
const NoneListDiv = styled.div`
  margin: 50px 0;
  color: ${({ theme }) => theme.gray.AE};
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`
