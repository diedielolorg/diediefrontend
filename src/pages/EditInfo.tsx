import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'
import { nicknameConfirm } from '../axios/login/login'
import { UserInfoEdit, withdrawal } from '../axios/userService/index'
import { Button, Portal } from '../components/common'
import ModalAtom from '../recoil/ModalAtom'
import * as CSS from '../style/LoginRelevantSt'
import useInput from '../utils/useInput'

const EditInfo = () => {
  const { t } = useTranslation()
  const [modal, setModal] = useRecoilState(ModalAtom)
  const [data, onChange] = useInput({
    nickName: '',
  })
  const [helpMsg, setHelpMsg] = useState({
    nickName: '',
  })
  const [isNicknameVerified, setIsNicknameVerified] = useState(false)
  const navigate = useNavigate()

  const nicknameConfirmMutation = useMutation(nicknameConfirm, {
    onSuccess: () => {
      setIsNicknameVerified(true)
      setHelpMsg((prevState) => ({ ...prevState, nickName: '사용가능한 닉네임입니다.' }))
    },
    onError: (error) => {
      setHelpMsg((prevState) => ({ ...prevState, nickName: '중복된 닉네임 입니다.' }))
    },
  })
  const UserInfoEditMutation = useMutation(UserInfoEdit, {
    onSuccess: () => {
      localStorage.setItem('nickname', data.nickName)
      navigate('/mypage')
    },
    onError: (error) => {
      setHelpMsg((prevState) => ({ ...prevState, password: '비밀번호가 일치하지 않습니다.' }))
    },
  })
  const withdrawalMutation = useMutation(withdrawal, {
    onSuccess: () => {
      Cookies.remove('accessToken')
      localStorage.removeItem('nickname')
      navigate('/withdrawal')
    },
    onError: (error) => {},
  })
  const nickNameConfirm = () => {
    const regex = /^[가-힣a-zA-Z]*$/
    if (!regex.test(data.nickName)) {
      setHelpMsg((prevState) => ({
        ...prevState,
        nickName: '사용할 수 없는 닉네임입니다. (특수문자, 띄어쓰기 불가능)',
      }))
      return
    }
    nicknameConfirmMutation.mutate({ nickname: data.nickName })
  }
  const infoSaveBtnHandler = () => {
    UserInfoEditMutation.mutate({
      nickname: data.nickName,
      password: data.password,
    })
  }
  const moveToWithdrawalBtnHandler = () => {
    setModal({
      ...modal,
      open: true,
      title: '정말 탈퇴할까요?',
      subTitle: '탈퇴 후에는 정보를 복구할 수 없어요.',
      primaryBtn: {
        children: '탈퇴하기',
        onClick: () => {
          withdrawalMutation.mutate()
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
    <CSS.BackgroundMain>
      <OverRaySection>
        <h1>{t('내 정보 수정')}</h1>

        <CSS.UserLabel>{t('닉네임')}</CSS.UserLabel>
        <CSS.ConfirmBoxDiv>
          <CSS.UserInfoInput
            id={'nickName'}
            name={'nickName'}
            value={data.nickName}
            onChange={onChange}
            size={564}
            placeholder={t('2자 이상 12자 이하의 닉네임을 입력해주세요.')}
          />
          <Button size={'s'} color={'lime'} onclick={nickNameConfirm}>
            {t('중복확인')}
          </Button>
        </CSS.ConfirmBoxDiv>
        <CSS.HelpMessageDiv color={isNicknameVerified ? 'true' : 'false'}>{t(helpMsg.nickName)}</CSS.HelpMessageDiv>
        <Button size={'xxxl'} color={'lime'} onclick={infoSaveBtnHandler}>
          {t('저장하기')}
        </Button>
        <WithdrawalDiv onClick={moveToWithdrawalBtnHandler}>{t('회원탈퇴')}</WithdrawalDiv>
        {modal.open && <Portal type={'modal'} modal={'confirm'} />}
      </OverRaySection>
    </CSS.BackgroundMain>
  )
}

export default EditInfo

const OverRaySection = styled.section<{ size?: 'login' }>`
  width: 856px;
  padding-top: 59px;
  padding-left: 97px;
  padding-right: 97px;
  padding-bottom: 63px;
  margin-top: 78px;

  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};

  h1 {
    color: ${({ theme }) => theme.color.black};
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
    margin-bottom: 22px;
  }
`

const WithdrawalDiv = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.gray.SF};
  margin-top: 21px;
  cursor: pointer;
`
