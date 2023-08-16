import React from 'react'
import { styled } from 'styled-components'
import * as CSS from '../style/LoginRelevantSt'
import { Button, Image } from '../components/common'
import { blackLogo, kakaoBtn } from '../assets'

const SignIn = () => {
  return (
    <CSS.BackgroundMain>
      <CSS.OverRaySection>
        <Image width={213} height={38.582} src={blackLogo} />
        <CSS.UserInfoBoxDiv>
          <CSS.UserLabel>{'이메일'}</CSS.UserLabel>
          <CSS.UserInfoInput type={'password'} size={504} placeholder={'이메일을 입력하세요.'} />
          <CSS.HelpMessageDiv>{'헬프메세지'}</CSS.HelpMessageDiv>
          <CSS.UserLabel>{'비밀번호'}</CSS.UserLabel>
          <CSS.UserInfoInput type={'password'} size={504} placeholder={'영문, 숫자, 특수문자 포함 8~13자'} />
          <CSS.HelpMessageDiv>{'헬프메세지'}</CSS.HelpMessageDiv>
        </CSS.UserInfoBoxDiv>
        <LoginBtnBoxDiv>
          <Button size={'xxl'} color={'lime'}>
            {'로그인'}
          </Button>
          <TextDiv>
            <p>{'회원가입'}</p>
            <p>{'|'}</p>
            <p>{'비밀번호 찾기'}</p>
          </TextDiv>
          <TextDiv>
            <p>{'--------------------'}</p>
            <p>{'SNS로 간편 로그인하기'}</p>
            <p>{'--------------------'}</p>
          </TextDiv>
          <Image width={330} height={55} src={kakaoBtn} />
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
`

const LoginBtnBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
