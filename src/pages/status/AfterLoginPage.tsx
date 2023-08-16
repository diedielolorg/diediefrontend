import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import AfterLogin from '../../assets/afterLogin.svg'
import { Button } from '../../components/common'

const AfterLoginPage = ({ mention }: { mention: string }) => {
  const navigate = useNavigate()

  const loginPageRouteHandler = () => {
    navigate('/signin')
  }
  return (
    <AfterLoginWrap>
      <ImgWrap>
        <img src={AfterLogin} alt={'엑스아이콘'} />
      </ImgWrap>
      <p>
        {mention}
        {'는'}
      </p>
      <p>{'로그인 후 이용할 수 있어요.'}</p>
      <BtnWrap>
        <Button size={'xl'} color={'basic'} onclick={loginPageRouteHandler}>
          {'로그인하러가기'}
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
    font-family: SUIT;
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
