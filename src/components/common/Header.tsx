import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { neonHeaderLogo, headerLogo, neonLangKo, langKo, neonLangEn, langEn } from '../../assets'

const Header = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const navigate = useNavigate()
  const path = useLocation().pathname

  const [isLogin, setIsLogin] = useState(false)
  const [isKorean, setIsKorean] = useState(currentLang.includes('ko'))

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

  const moveToSignOutBtnHandler = () => {
    Cookies.remove('accessToken')
    localStorage.removeItem('nickname')
    navigate('/')
  }

  const translateBtnHandler = () => {
    const setLang = currentLang.includes('ko') ? 'en' : 'ko'
    setIsKorean(setLang === 'ko')
    i18n.changeLanguage(setLang)
  }

  return (
    <WrapHeader>
      <IconDiv onClick={() => navigate('/')}>
        <img width={'53px'} height={'40px'} src={path === '/' ? neonHeaderLogo : headerLogo} alt={'헤더 로고'} />
      </IconDiv>
      <Menu>
        <MenuBtn type={'button'} onClick={() => navigate('/ranking')} $path={path}>
          {t('랭킹')}
        </MenuBtn>
        {isLogin ? (
          <>
            <MenuBtn type={'button'} onClick={() => navigate('/mypage')} $path={path}>
              {t('마이페이지')}
            </MenuBtn>
            <MenuBtn type={'button'} onClick={moveToSignOutBtnHandler} $path={path}>
              {t('로그아웃')}
            </MenuBtn>
          </>
        ) : (
          <MenuBtn type={'button'} onClick={() => navigate('/signin')} $path={path}>
            {t('로그인')}
          </MenuBtn>
        )}
        <IconDiv onClick={translateBtnHandler}>
          <img
            width={'55px'}
            height={'32px'}
            src={path === '/' ? (isKorean ? neonLangKo : neonLangEn) : isKorean ? langKo : langEn}
            alt={'다국어 변환 아이콘'}
          />
        </IconDiv>
      </Menu>
    </WrapHeader>
  )
}

export default Header

const WrapHeader = styled.header`
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IconDiv = styled.div`
  img {
    cursor: pointer;
  }
`

const Menu = styled.div`
  display: flex;
  gap: 60px;
`

const MenuBtn = styled.button<{ $path: string }>`
  width: 90px;
  color: ${({ $path, theme }) => ($path === '/' ? theme.green.turquoise : theme.green.basic)};
  background-color: transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`
