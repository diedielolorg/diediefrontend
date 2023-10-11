import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import AfterLogin from '../../assets/afterLogin.svg'
import { Button } from '../../components/common'

const AfterLoginPage = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const { mention } = useLocation().state

  const loginPageRouteHandler = () => {
    navigate('/signin')
  }

  return (
    <AfterLoginWrap>
      <ImgWrap>
        <img src={AfterLogin} alt={'엑스아이콘'} />
      </ImgWrap>
      <p>
        {t(mention)}
        {t('는')}
      </p>
      <p>{t('로그인 후 이용할 수 있어요.')}</p>
      <BtnWrap>
        <Button size={'xl'} color={'basic'} onclick={loginPageRouteHandler}>
          {t('로그인하러가기')}
        </Button>
      </BtnWrap>
    </AfterLoginWrap>
  )
}

const AfterLoginWrap = styled.div`
  margin-top: 161px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.color.white};
    font-size: 30px;
    font-weight: 600;
  }
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
`

const BtnWrap = styled.div`
  margin-top: 60px;
`
export default AfterLoginPage
