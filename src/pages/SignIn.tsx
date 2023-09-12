import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'
import { blackLogo, kakaoBtn } from '../assets'
import { kakaoLogin, login } from '../axios/login/login'
import { Button, Image, Portal } from '../components/common'
import SnackBarAtom from '../recoil/SnackBarAtom'
import * as CSS from '../style/LoginRelevantSt'
import useInput from '../utils/useInput'

const SignIn = () => {
  const { t } = useTranslation()

  // ystart5008@naver.com
  // fdsafawe
  const [isSnackbar, setIsSnackBar] = useRecoilState(SnackBarAtom)
  const [data, onChange] = useInput({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  // const { kakaoData } = useQuery(['kakao'], kakaoLogin)
  // console.log(kakaoData)
  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      navigate('/')
    },
    onError: (error) => {
      setIsSnackBar({ open: true })
    },
  })
  const moveToSignUpBtnHandler = () => {
    navigate('/signup')
  }
  const loginBtnHandler = () => {
    loginMutation.mutate({
      email: data.email,
      password: data.password,
    })
  }
  const kakaoLoginHandler = () => {}
  return (
    <CSS.BackgroundMain>
      <CSS.OverRaySection size={'login'}>
        <Image width={213} height={38.582} src={blackLogo} />
        <CSS.UserInfoBoxDiv>
          <CSS.UserLabel htmlFor={'email'}>{t('이메일')}</CSS.UserLabel>
          <CSS.UserInfoInput
            id={'email'}
            name={'email'}
            value={data.email}
            onChange={onChange}
            size={504}
            placeholder={t('이메일을 입력하세요.')}
          />
          <CSS.HelpMessageDiv>{''}</CSS.HelpMessageDiv>
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
          <CSS.HelpMessageDiv>{''}</CSS.HelpMessageDiv>
        </CSS.UserInfoBoxDiv>
        <LoginBtnBoxDiv>
          <Button size={'xxl'} color={'lime'} onclick={loginBtnHandler}>
            {t('로그인')}
          </Button>
          {isSnackbar.open && <Portal type={'SnackBar'} snackBar={'login'} />}

          <TextDiv>
            <button type={'button'} onClick={moveToSignUpBtnHandler}>
              {t('회원가입')}
            </button>
          </TextDiv>
          <TextDiv>
            <p>{'--------------------'}</p>
            <p>{t('SNS로 간편 로그인하기')}</p>
            <p>{'--------------------'}</p>
          </TextDiv>
          <button type={'button'} onClick={kakaoLoginHandler}>
            {'카카오로그인'}
            {/* <Image width={330} height={55} src={kakaoBtn} /> */}
          </button>
        </LoginBtnBoxDiv>
      </CSS.OverRaySection>
    </CSS.BackgroundMain>
  )
}

export default SignIn

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray.AE};

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.gray.AE};
    font-weight: 500;
    line-height: 16px;
    font-size: 16px;
    text-align: center;
  }
`

const LoginBtnBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
