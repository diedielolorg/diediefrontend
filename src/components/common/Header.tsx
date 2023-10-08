import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import headerLogo from '../../assets/headerLogo.svg'
import { langKo, langEn } from '../../assets'
import { Languages } from '../../utils/Locales/i18n'

const Header = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isEnglish, setIsEnglish] = useState<boolean>(true)

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

  const translateBtnHandler = (lang: Languages) => {
    setIsEnglish((prevState) => !prevState)
    i18n.changeLanguage(lang)
  }

  return (
    <WrapHeader>
      <Logo type={'button'} onClick={() => navigate('/')} />
      <Menu>
        <MenuBtn type={'button'} onClick={() => navigate('/ranking')}>
          {t('랭킹')}
        </MenuBtn>
        {isLogin ? (
          <MenuBtn type={'button'} onClick={() => navigate('/mypage')}>
            {'마이페이지'}
          </MenuBtn>
        ) : null}
        {isLogin ? (
          <MenuBtn type={'button'} onClick={moveToSignOutBtnHandler}>
            {'로그아웃'}
          </MenuBtn>
        ) : (
          <MenuBtn type={'button'} onClick={() => navigate('/signin')}>
            {t('로그인')}
          </MenuBtn>
        )}
        <TransBtn type={'button'} onClick={() => translateBtnHandler(isEnglish ? 'en' : 'ko')} isEnglish={isEnglish} />
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
  @media screen and (max-width: 1440px) {
    gap: 508px;
  }
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.button`
  background-color: transparent;
  cursor: pointer;
  background-image: url(${headerLogo});
  width: 53px;
  height: 40px;
`

const Menu = styled.div`
  display: flex;
  min-width: 500px;
  justify-content: flex-end;
  gap: 85px;
`

const MenuBtn = styled.button`
  color: ${({ theme }) => theme.green.basic};
  background-color: transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`
const TransBtn = styled.button<{ isEnglish: boolean }>`
  cursor: pointer;
  background-image: url(${(props) => (props.isEnglish ? langKo : langEn)});
  width: 55px;
  height: 32px;
  background-color: transparent;
`
