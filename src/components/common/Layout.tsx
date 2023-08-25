import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import Image from './Image'
import headerLogo from '../../assets/headerLogo.svg'
import langKo from '../../assets/langKo.svg'
import langEn from '../../assets/langEn.svg'

const Layout = () => {
  const navigate = useNavigate()
  // 로그인 상태
  const [isLogin, setIsLogin] = useState(false)
  // 언어
  const [isKorean, setIsKorean] = useState(true)
  // hooks
  useEffect(() => {
    const checkLoginStatusHandler = () => {
      // ! 임시 로그인 여부 확인 로직 추가
    }
    checkLoginStatusHandler()
  })
  // functions
  const moveToMainBtnHandler = () => {
    // 로고
    navigate('/')
  }
  const moveToRankingBtnHandler = () => {
    // 랭킹
    navigate('/ranking')
  }
  const moveToMypageBtnHandler = () => {
    // 마이페이지
    navigate('/mypage')
  }
  const moveToSignInBtnHandler = () => {
    // 로그인
    navigate('/signin')
  }
  const moveToSignOutBtnHandler = () => {
    // 로그아웃
    navigate('/')
  }
  // 언어 상태 변환 핸들러
  const translateBtnHandler = () => {
    setIsKorean((prevState) => !prevState)
  }
  return (
    <BackgroundColor>
      <Header>
        <Logo type="button" onClick={moveToMainBtnHandler}>
          <Image src={headerLogo} alt={'로고'} />
        </Logo>
        <Menu>
          <MenuBtn type="button" onClick={moveToRankingBtnHandler}>
            랭킹
          </MenuBtn>
          {isLogin ? (
            <MenuBtn type="button" onClick={moveToMypageBtnHandler}>
              마이페이지
            </MenuBtn>
          ) : null}
          {isLogin ? (
            <MenuBtn type="button" onClick={moveToSignOutBtnHandler}>
              로그아웃
            </MenuBtn>
          ) : (
            <MenuBtn type="button" onClick={moveToSignInBtnHandler}>
              로그인
            </MenuBtn>
          )}
          <MenuBtn type="button" onClick={translateBtnHandler}>
            <Image src={isKorean ? langKo : langEn} alt={'언어 번역 버튼'} />
          </MenuBtn>
        </Menu>
      </Header>
      <MaxWidth>
        <Outlet />
      </MaxWidth>
    </BackgroundColor>
  )
}

const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  min-height: 955px;
  background-color: ${({ theme }) => theme.gray.TO};
`

const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

// 헤더
const Header = styled.div`
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  gap: 741px;
  @media screen and (max-width: 1440px) {
    gap: 508px;
  }
  justify-content: center;
  align-items: center;
  // ! 임시 태블릿 744px 반응형 추후 추가
`
// 헤더 내 로고
const Logo = styled.button`
  background-color: transparent;
`
// 헤더 내 메뉴 wrap
const Menu = styled.div`
  display: flex;
  min-width: 500px;
  justify-content: flex-end;
  gap: 85px;
`
// 메뉴
const MenuBtn = styled.button`
  color: ${({ theme }) => theme.green.basic};
  background-color: transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`
export default Layout
