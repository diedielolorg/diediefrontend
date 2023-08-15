import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { BackgroundMain } from '../../components/loginRelevant/LoginRelevantSt'
import { Button } from '../../components/common'

const Completed = () => {
  const navigate = useNavigate()

  const moveToLoginPageBtnHandler = () => {
    navigate('/signin')
  }
  return (
    <BackgroundMain>
      <OverRaySection>
        <div>
          <NickNameBoxDiv>
            <TextP color={'name'}>{'방배동둠피스트'}</TextP>
            <TextP>{'님,'}</TextP>
          </NickNameBoxDiv>
          <TextP>{'가입을 축하합니다!'}</TextP>
        </div>
        <Button size={'xl'} color={'lime'} onclick={moveToLoginPageBtnHandler}>
          {'로그인하러 가기'}
        </Button>
      </OverRaySection>
    </BackgroundMain>
  )
}

export default Completed

const OverRaySection = styled.section`
  width: 506px;
  height: 361px;

  margin-top: 182px;

  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;
`
const TextP = styled.p`
  color: ${({ color, theme }) => (color === 'name' ? theme.green.name : theme.color.black)};
  text-align: center;
  font-size: 35px;
  font-weight: 800;
  line-height: 35px;
`

const NickNameBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 12px;
`
