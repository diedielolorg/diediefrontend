import React, { useState } from 'react'
import * as CSS from '../style/LoginRelevantSt'
import { Button } from '../components/common'

const EditInfo = () => {
  const [nickNameDuplication, setNickNameDuplication] = useState('')

  const nickNameConfirm = () => setNickNameDuplication('사용할 수 없는 닉네임입니다. (특수문자, 띄어쓰기 불가능)')
  return (
    <CSS.BackgroundMain>
      <CSS.OverRaySection>
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
          <CSS.UserInfoInput size={564} placeholder={'닉네임 변경을 위해 비밀번호를 입력해주세요.'} />
        </CSS.ConfirmBoxDiv>
        <CSS.HelpMessageDiv>{nickNameDuplication}</CSS.HelpMessageDiv>
        <Button size={'xxxl'} color={'lime'} onclick={nickNameConfirm}>
          {'저장하기'}
        </Button>
      </CSS.OverRaySection>
    </CSS.BackgroundMain>
  )
}

export default EditInfo
