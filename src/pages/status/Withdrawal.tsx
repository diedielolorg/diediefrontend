import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { logo } from '../../assets'
import { Button, Image } from '../../components/common'

const Withdrawal = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const moveToMainBtnHandler = () => {
    navigate('/')
  }
  return (
    <BackgroundMain>
      <Image width={320} height={56.84} src={logo} />
      <div>
        <p>{t('성공적으로 탈퇴되었습니다.')}</p>
        <p>{t('서비스를 이용해주셔서 감사합니다.')}</p>
      </div>
      <Button size={'xxl'} color={'lime'} onclick={moveToMainBtnHandler}>
        {t('메인화면으로 돌아가기')}
      </Button>
    </BackgroundMain>
  )
}

export default Withdrawal

const BackgroundMain = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-top: 168px;

  div {
    margin-top: 49px;
    margin-bottom: 59px;
  }
  p {
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 50px;
  }
`
