import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import * as CSS from '../style/LoginRelevantSt'
import { Button } from '../components/common'

const EditInfo = () => {
  const [nickNameDuplication, setNickNameDuplication] = useState('')
  const [PwHelpMsg, setPwHelpMsg] = useState('')
  const navigate = useNavigate()

  const nickNameConfirm = () => setNickNameDuplication('사용할 수 없는 닉네임입니다. (특수문자, 띄어쓰기 불가능)')
  const infoSaveBtnHandler = () => {
    setPwHelpMsg('사용할 수 없는 비밀번호 입니다.')
  }
  const moveToWithdrawalBtnHandler = () => {
    navigate('/withdrawal')
  }

  return (
    <CSS.BackgroundMain>
      <OverRaySection>
        <h1>{'내 정보 수정'}</h1>

        <CSS.UserLabel>{'닉네임'}</CSS.UserLabel>
        <CSS.ConfirmBoxDiv>
          <CSS.UserInfoInput size={564} placeholder={'2자 이상 20자 이하의 닉네임을 입력해주세요.'} />
          <Button size={'s'} color={'lime'} onclick={nickNameConfirm}>
            {'중복확인'}
          </Button>
        </CSS.ConfirmBoxDiv>
        <CSS.HelpMessageDiv>{nickNameDuplication}</CSS.HelpMessageDiv>
        <CSS.UserLabel>{'비밀번호'}</CSS.UserLabel>
        <CSS.ConfirmBoxDiv>
          <CSS.UserInfoInput size={660} placeholder={'닉네임 변경을 위해 비밀번호를 입력해주세요.'} />
        </CSS.ConfirmBoxDiv>
        <CSS.HelpMessageDiv>{PwHelpMsg}</CSS.HelpMessageDiv>
        <Button size={'xxxl'} color={'lime'} onclick={infoSaveBtnHandler}>
          {'저장하기'}
        </Button>
        <WithdrawalDiv onClick={moveToWithdrawalBtnHandler}>회원탈퇴</WithdrawalDiv>
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
