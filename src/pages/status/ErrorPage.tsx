import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WrapDiv, ContentSection, IllustSection } from '../../style/GlobalStyle'
import { Image, Button } from '../../components/common'
import { errorPageIcon, errorName, illust } from '../../assets'

const NoMatch = () => {
  const navigate = useNavigate()

  return (
    <WrapDiv>
      <ContentSection>
        <Image width={175} height={105} src={errorPageIcon} />
        <Image width={470} height={65} src={errorName} />
        <p>
          {'일치하는 요청을 찾지 못했어요.'}
          <br />
          {'요청하신 페이지가 사라졌거나, 잘못된 경로예요.'}
        </p>
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

export default NoMatch
