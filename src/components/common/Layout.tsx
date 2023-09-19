import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Outlet, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import headerLogo from '../../assets/headerLogo.svg'
import { langKo, langEn } from '../../assets'
import { Languages, languages } from '../../utils/Locales/i18n'

const Layout = () => {
  const { t, i18n } = useTranslation()

  const navigate = useNavigate()
  // 로그인 상태
  const [isLogin, setIsLogin] = useState<boolean>(false)
  // 언어
  const [isKorean, setIsKorean] = useState<boolean>(true)

  // hooks
  useEffect(() => {
    const checkLoginStatusHandler = () => {
      if (Cookies.get('accessToken')) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
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
    // 로그아웃 처리, 네비게이터 쿠키 및 로컬 스토리지 삭제
    Cookies.remove('accessToken')
    localStorage.removeItem('nickname')
    navigate('/')
  }
  // 언어 상태 변환 핸들러
  const translateBtnHandler = (lang: Languages) => {
    setIsKorean((prevState) => !prevState)
    i18n.changeLanguage(lang)
  }
  return (
    <BackgroundColor>
      <Header>
        <Logo type={'button'} onClick={moveToMainBtnHandler}>
          {/* <Image src={headerLogo} alt={'로고'} /> */}
        </Logo>
        <Menu>
          <MenuBtn type={'button'} onClick={moveToRankingBtnHandler}>
            {t('랭킹')}
          </MenuBtn>
          {isLogin ? (
            <MenuBtn type={'button'} onClick={moveToMypageBtnHandler}>
              {'마이페이지'}
            </MenuBtn>
          ) : null}
          {isLogin ? (
            <MenuBtn type={'button'} onClick={moveToSignOutBtnHandler}>
              {'로그아웃'}
            </MenuBtn>
          ) : (
            <MenuBtn type={'button'} onClick={moveToSignInBtnHandler}>
              {t('로그인')}
            </MenuBtn>
          )}
          <TransBtn type={'button'} onClick={() => translateBtnHandler(isKorean ? 'en' : 'ko')} isKorean={isKorean} />
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
  cursor: pointer;
  background-image: url(${headerLogo});
  width: 53px;
  height: 40px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`
const TransBtn = styled.button<{ isKorean: boolean }>`
  cursor: pointer;
  background-image: url(${(props) => (props.isKorean ? langKo : langEn)});
  width: 55px;
  height: 32px;
  background-color: transparent;
`
export default Layout
