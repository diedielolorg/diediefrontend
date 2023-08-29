/* eslint-disable prettier/prettier */
import { useMutation } from '@tanstack/react-query'
import { useRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import * as CSS from '../style/LoginRelevantSt'
import { Button, Image, Portal } from '../components/common'
import { blackLogo } from '../assets'
import SnackBarAtom from '../recoil/SnackBarAtom'
import Timer from '../components/Timer'
import useInput from '../utils/useInput'
import { authCode } from '../axios/login'

const SignUp: React.FC = () => {
  const { t } = useTranslation()

  const [isSnackbar, setIsSnackBar] = useRecoilState(SnackBarAtom)
  const [helpMsg, setHelpMsg] = useState({
    nickName: '',
    email: '',
    certified: '',
    password: '',
    passwordConfirm: '',
  })
  const [data, onChange] = useInput({
    nickName: '',
    email: '',
    address: '',
    ConfirmNumber: '',
    password: '',
    passwordConfirm: '',
  })
  const [isCertified, setIsCertified] = useState(false)
  const [isNickNameSuccess, setIsNickNameSuccess] = useState(false)
  const [timer, setTimer] = useState(0)
  const [reTimer, setReTimer] = useState(0)
  const [isSignUp, setIsSignUp] = useState(false)

  const authCodeMutation = useMutation(authCode, {
    onSuccess: () => {
      setIsCertified(true)
    },
    onError: (error) => {
      setHelpMsg((prevState) => ({ ...prevState, email: '이미 등록된 이메일 입니다.' }))
    },
  })

  useEffect(() => {
    const isNickNameValid = data.nickName.length >= 2
    const areFieldsFilled = Object.values(data)
      .slice(1)
      .every((value) => value.length !== 0)

    setIsSignUp(isNickNameValid && areFieldsFilled)
  }, [data])

  const nickNameConfirm = () => {
    const regex = /^[가-힣a-zA-Z]*$/
    if (!regex.test(data.nickName)) {
      setHelpMsg((prevState) => ({
        ...prevState,
        nickName: '사용할 수 없는 닉네임입니다. (특수문자, 띄어쓰기 불가능)',
      }))
    }
  }

  const emailAuthenticationBtnHandler = () => {
    const FullEmail = `${data.email}@${data.address}`
    const regex = /\./
    if (!regex.test(data.address)) {
      setHelpMsg((prevState) => ({ ...prevState, email: '이메일 형식을 확인해주세요.' }))
      return
    }
    authCodeMutation.mutate({ email: FullEmail })
    setTimer(180)
  }

  const certifiedBtnHandler = () => {
    setIsSnackBar({ open: true })
    setHelpMsg((prevState) => ({ ...prevState, certified: '인증번호가 일치하지 않습니다.' }))
  }

  const signUpBtnHandler = () => {
    setHelpMsg((prevState) => ({ ...prevState, password: '사용할 수 없는 비밀번호 입니다.' }))
    if (data.password !== data.passwordConfirm) {
      setHelpMsg((prevState) => ({ ...prevState, passwordConfirm: '비밀번호가 일치하지 않습니다.' }))
    } else {
      setHelpMsg((prevState) => ({ ...prevState, passwordConfirm: '' }))
    }
  }
  const RetransmissionBtnHandler = () => {
    setReTimer(reTimer + 1)
  }
  return (
    <CSS.BackgroundMain>
      <CSS.OverRaySection>
        <Image width={213} height={38.582} src={blackLogo} />
        <CSS.UserInfoBoxDiv>
          <CSS.UserLabel htmlFor={'nickName'}>{t('닉네임')}</CSS.UserLabel>
          <CSS.ConfirmBoxDiv>
            <CSS.UserInfoInput
              id={'nickName'}
              size={408}
              name={'nickName'}
              value={data.nickName}
              onChange={onChange}
              placeholder={t('2자 이상 12자 이하의 닉네임을 입력해주세요.')}
            />
            {/* 회의할때 얘기해봐야함 20자는 너무 길어서 일단 12자 해놓음 */}
            <Button size={'s'} color={'lime'} onclick={nickNameConfirm}>
              {t('중복확인')}
            </Button>
          </CSS.ConfirmBoxDiv>
          <CSS.HelpMessageDiv color={isNickNameSuccess ? 'true' : 'false'}>{t(helpMsg.nickName)}</CSS.HelpMessageDiv>
          <CSS.UserLabel htmlFor={'email'}>{t('이메일')}</CSS.UserLabel>
          <CSS.ConfirmBoxDiv>
            <CSS.UserInfoInput id={'email'} size={167} name={'email'} value={data.email} onChange={onChange} />
            <p>{'@'}</p>
            <CSS.UserInfoInput id={'email'} size={238} name={'address'} value={data.address} onChange={onChange} />
            <Button size={'xs'} color={'lime'} onclick={emailAuthenticationBtnHandler}>
              {t('인증')}
            </Button>
          </CSS.ConfirmBoxDiv>
          <CSS.HelpMessageDiv>{t(helpMsg.email)}</CSS.HelpMessageDiv>
          {isCertified && (
            <>
              <CSS.UserLabel htmlFor={'ConfirmNumber'}>
                {t('인증번호')}
                <p>{t('작성하신 이메일로 인증번호를 전송했어요.')}</p>
              </CSS.UserLabel>
              <CSS.ConfirmBoxDiv>
                <InputBoxDiv>
                  <CSS.UserInfoInput
                    id={'ConfirmNumber'}
                    size={316}
                    name={'ConfirmNumber'}
                    value={data.ConfirmNumber}
                    onChange={onChange}
                  />
                  <TimerP>
                    <Timer reTimeLimit={reTimer} timeLimit={timer} onTimerEnd={() => setTimer(0)} />
                  </TimerP>
                </InputBoxDiv>
                <Button size={'s'} color={'gray'} onclick={RetransmissionBtnHandler}>
                  {t('재전송')}
                </Button>
                <Button
                  size={'s'}
                  color={timer === 0 ? 'light' : 'lime'}
                  onclick={certifiedBtnHandler}
                  disabled={timer === 0}
                >
                  {t('인증')}
                </Button>
                {isSnackbar.open && <Portal type={'SnackBar'} snackBar={'one'} />}
              </CSS.ConfirmBoxDiv>
              <CSS.HelpMessageDiv>{t(helpMsg.certified)}</CSS.HelpMessageDiv>
            </>
          )}

          <CSS.UserLabel htmlFor={'password'}>{t('비밀번호')}</CSS.UserLabel>
          <CSS.UserInfoInput
            id={'password'}
            type={'password'}
            size={504}
            name={'password'}
            value={data.password}
            onChange={onChange}
            placeholder={t('영문, 숫자, 특수문자 포함 8~13자')}
          />
          <CSS.HelpMessageDiv>{t(helpMsg.password)}</CSS.HelpMessageDiv>
          <CSS.UserLabel htmlFor={'passwordConfirm'}>{t('비밀번호 확인')}</CSS.UserLabel>
          <CSS.UserInfoInput
            id={'passwordConfirm'}
            type={'password'}
            size={504}
            name={'passwordConfirm'}
            value={data.passwordConfirm}
            onChange={onChange}
            placeholder={t('비밀번호를 다시 입력해주세요.')}
          />
          <CSS.HelpMessageDiv>{t(helpMsg.passwordConfirm)}</CSS.HelpMessageDiv>
        </CSS.UserInfoBoxDiv>
        <SignUpBtnDiv isSignUp={!isSignUp}>
          <Button size={'l'} color={!isSignUp ? 'light' : 'lime'} disabled={!isSignUp} onclick={signUpBtnHandler}>
            {t('회원가입 하기')}
          </Button>
        </SignUpBtnDiv>
      </CSS.OverRaySection>
    </CSS.BackgroundMain>
  )
}

export default SignUp

const SignUpBtnDiv = styled.div<{ isSignUp: boolean }>`
  display: flex;
  justify-content: center;
  color: ${({ theme, isSignUp }) => (isSignUp ? theme.color.black : theme.gray.AE)};
`
const InputBoxDiv = styled.div`
  position: relative;
`
const TimerP = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  position: absolute;
  top: 15px;
  right: 15px;
`
