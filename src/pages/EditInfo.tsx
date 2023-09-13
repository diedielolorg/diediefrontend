import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { nicknameConfirm } from '../axios/login/login'
import { UserInfoEdit, withdrawal } from '../axios/userService/index'
import { Button } from '../components/common'
import * as CSS from '../style/LoginRelevantSt'
import useInput from '../utils/useInput'

const EditInfo = () => {
  const { t } = useTranslation()

  const [data, onChange] = useInput({
    nickName: '',
    password: '',
  })
  const [helpMsg, setHelpMsg] = useState({
    nickName: '',
    password: '',
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
      navigate('/mypage')
    },
    onError: (error) => {
      setHelpMsg((prevState) => ({ ...prevState, password: '비밀번호가 일치하지 않습니다.' }))
    },
  })
  const withdrawalMutation = useMutation(withdrawal, {
    onSuccess: () => {
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
    withdrawalMutation.mutate()
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
        <CSS.UserLabel>{t('비밀번호')}</CSS.UserLabel>
        <CSS.ConfirmBoxDiv>
          <CSS.UserInfoInput
            id={'password'}
            type={'password'}
            name={'password'}
            value={data.password}
            onChange={onChange}
            size={660}
            placeholder={t('닉네임 변경을 위해 비밀번호를 입력해주세요.')}
          />
        </CSS.ConfirmBoxDiv>
        <CSS.HelpMessageDiv>{t(helpMsg.password)}</CSS.HelpMessageDiv>
        <Button size={'xxxl'} color={'lime'} onclick={infoSaveBtnHandler}>
          {t('저장하기')}
        </Button>
        <WithdrawalDiv onClick={moveToWithdrawalBtnHandler}>{t('회원탈퇴')}</WithdrawalDiv>
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
  margin-top: ${(props) => (props.size === 'login' ? '40px' : '23px')};

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
