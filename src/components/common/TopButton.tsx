import React from 'react'
import { styled } from 'styled-components'
import { topicon } from '../../assets'

const TopButton = () => {
  const goTopHandler = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <TopButtonWrap onClick={goTopHandler}>
      <img src={topicon} alt={'탑 버튼 아이콘'} />
      <p>{'TOP'}</p>
    </TopButtonWrap>
  )
}

const TopButtonWrap = styled.div`
  position: fixed;
  right: 150px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.4));
  border-radius: 50%;
  font-family: Rowdies;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`
export default TopButton
