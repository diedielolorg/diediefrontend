import React from 'react'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Image, Button } from '../../components/common'
import { errorPageIcon, errorName, logo, mainBg } from '../../assets'

const ErrorPage = ({ type }: { type: string }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <WrapError>
      <ContentSection>
        <Image width={175} height={105} src={errorPageIcon} />
        <Image width={type === 'error' ? 470 : 350} height={65} src={type === 'error' ? errorName : logo} />
        {type === 'error' ? (
          <div>
            <p>{t('일치하는 요청을 찾지 못했어요.')}</p>
            <p>{t('요청하신 정보가 존재하지 않거나, 잘못된 경로예요.')}</p>
          </div>
        ) : (
          <div>
            <p>{t('주소와 일치하는 페이지가 없습니다.')}</p>
            <p>{t('입력하신 주소가 정확한지 다시 확인해주세요.')}</p>
          </div>
        )}
        <Button size={'xxl'} color={'basic'} onclick={() => navigate('/')}>
          {t('메인화면으로 돌아가기')}
        </Button>
      </ContentSection>
    </WrapError>
  )
}

export default ErrorPage

const WrapError = styled.div`
  height: 865px;
  margin: 0 -320px;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 70% 100%;
  mix-blend-mode: lighten;
`

const ContentSection = styled.section`
  margin-left: 320px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 52px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.color.white};
    font-size: 30px;
    font-weight: 600;
  }
`
