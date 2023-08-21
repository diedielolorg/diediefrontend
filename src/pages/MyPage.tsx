import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import * as CSS from '../style/LoginRelevantSt'
import { nextonIcon } from '../assets'
import { Image } from '../components/common'

const MyPage = () => {
  const navigate = useNavigate()
  const movoToEditMyInfoBtnHandler = () => {
    navigate('/editinfo')
  }
  return (
    <CSS.BackgroundMain>
      <Section>
        <NameBoxDiv>
          <TextP color={'name'}>{'방배동둠피스트'}</TextP>
          <TextP>{'님, 안녕하세요!'}</TextP>
        </NameBoxDiv>
        <MoveToBtnDiv onClick={movoToEditMyInfoBtnHandler}>
          <p>{'내 정보 수정'}</p>
          <Image width={9} height={18} src={nextonIcon} />
        </MoveToBtnDiv>
        <MoveToBtnDiv>
          <p>{'내가 등록한 신고'}</p>
          <Image width={9} height={18} src={nextonIcon} />
        </MoveToBtnDiv>
      </Section>
    </CSS.BackgroundMain>
  )
}

export default MyPage

const Section = styled.section`
  display: flex;
  flex-direction: column;
`
const NameBoxDiv = styled.div`
  width: 857px;
  height: 93px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.black};

  gap: 8px;
  padding-left: 46px;
  margin-top: 43px;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
`
const TextP = styled.p`
  color: ${({ color, theme }) => (color === 'name' ? theme.green.name : theme.color.white)};
  text-align: center;
  font-size: 35px;
  font-weight: ${({ color }) => (color === 'name' ? 700 : 400)};
  line-height: 35px;
  line-height: 32px;
`
const MoveToBtnDiv = styled.div`
  width: 857px;
  height: 68px;
  border-radius: 10px;
  border: 1px solid #616161;
  background: rgba(68, 68, 68, 0.3);

  color: ${({ theme }) => theme.color.white};

  font-size: 20px;
  font-weight: 500;
  line-height: 32px;

  display: flex;
  align-items: center;
  padding-left: 46px;
  padding-right: 48px;
  margin-bottom: 15px;
  justify-content: space-between;
  cursor: pointer;
`
