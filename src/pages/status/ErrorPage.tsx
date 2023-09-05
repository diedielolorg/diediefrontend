import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Image, Button } from '../../components/common'
import { errorPageIcon, errorName, logo, illust } from '../../assets'

const ErrorPage = ({ type }: { type: string }) => {
  const navigate = useNavigate()

  return (
    <WrapDiv>
      <ContentSection>
        <Image width={175} height={105} src={errorPageIcon} />
        <Image width={type === 'error' ? 470 : 350} height={65} src={type === 'error' ? errorName : logo} />
        {type === 'error' ? (
          <div>
            <p>{`일치하는 요청을 찾지 못했어요.`}</p>
            <p>{'요청하신 정보가 존재하지 않거나, 잘못된 경로예요.'}</p>
          </div>
        ) : (
          <div>
            <p>{`주소와 일치하는 페이지가 없습니다.`}</p>
            <p>{'입력하신 주소가 정확한지 다시 확인해주세요.'}</p>
          </div>
        )}
        <Button size={'xxl'} color={'basic'} onclick={() => navigate('/')}>
          {'메인화면으로 돌아가기'}
        </Button>
      </ContentSection>
      <IllustSection>
        <Image width={800} height={453} src={illust} />
      </IllustSection>
    </WrapDiv>
  )
}

export default ErrorPage

const WrapDiv = styled.div`
  padding-top: 155px;
  display: flex;
  section {
    width: 50%;
  }
`

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
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

const IllustSection = styled.section`
  img {
    margin-top: 200px;
  }
`
