/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { styled } from 'styled-components'
import * as CSS from '../components/loginRelevant/LoginRelevantSt'
import { Button, Image } from '../components/common'
import blackLogo from '../assets/blackLogo.svg'

const SignUp = () => {
  const [passwordConfirm, setPasswordConfirm] = useState('')
  // const [certified, setCertified] = useState(true)

  const nickNameConfirm = () => console.log('닉네임중복검사버튼')
  const signUpBtnHandler = () => setPasswordConfirm('비밀번호가 일치하지 않습니다.')
  const emailAuthenticationBtnHandler = () => console.log('이메일 검사')
  return (
    <CSS.BackgroundMain>
      <CSS.OverRaySection>
        <Image width={213} height={38.582} src={blackLogo} />
        <CSS.UserInfoBoxDiv>
          <CSS.UserLabel>{'닉네임'}</CSS.UserLabel>
          <ConfirmBoxDiv>
            <CSS.UserInfoInput size={408} placeholder={'2자 이상 20자 이하의 닉네임을 입력해주세요.'} />
            <Button size={'s'} color={'basic'} onclick={nickNameConfirm}>
              {'중복확인'}
            </Button>
          </ConfirmBoxDiv>
          <CSS.HelpMessageDiv>{'사용할 수 없는 닉네임입니다. (특수문자, 띄어쓰기 불가능)'}</CSS.HelpMessageDiv>
          <CSS.UserLabel>{'이메일'}</CSS.UserLabel>
          <ConfirmBoxDiv>
            <CSS.UserInfoInput size={167} />
            <p>{'@'}</p>
            <CSS.UserInfoInput size={238} />
            <Button size={'xs'} color={'basic'} onclick={emailAuthenticationBtnHandler}>
              {'인증'}
            </Button>
          </ConfirmBoxDiv>
          <CSS.HelpMessageDiv>{'이미 등록된 이메일 입니다.'}</CSS.HelpMessageDiv>
          <CSS.UserLabel>
            {'인증번호'}
            <p>{'작성하신 이메일로 인증번호를 전송했어요.'}</p>
          </CSS.UserLabel>

          <ConfirmBoxDiv>
            <CSS.UserInfoInput size={408} placeholder={'2자 이상 20자 이하의 닉네임을 입력해주세요.'} />
            <Button size={'s'} color={'basic'} onclick={nickNameConfirm}>
              {'중복확인'}
            </Button>
          </ConfirmBoxDiv>
          <CSS.HelpMessageDiv />
          <CSS.UserLabel>{'비밀번호'}</CSS.UserLabel>
          <CSS.UserInfoInput size={504} placeholder={'영문, 숫자, 특수문자 포함 8~13자'} />
          <CSS.HelpMessageDiv>{'사용할 수 없는 비밀번호 입니다.'}</CSS.HelpMessageDiv>
          <CSS.UserLabel>{'비밀번호 확인'}</CSS.UserLabel>
          <CSS.UserInfoInput size={504} placeholder={'비밀번호를 다시 입력해주세요.'} />
          <CSS.HelpMessageDiv>{passwordConfirm}</CSS.HelpMessageDiv>
        </CSS.UserInfoBoxDiv>
        <SignUpBtnDiv>
          <Button size={'l'} color={'light'} onclick={signUpBtnHandler}>
            {'회원가입 하기'}
          </Button>
        </SignUpBtnDiv>
      </CSS.OverRaySection>
    </CSS.BackgroundMain>
  )
}

export default SignUp

const ConfirmBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
const SignUpBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.gray.AE};
`
