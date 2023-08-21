import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WrapDiv, ContentSection, IllustSection } from '../../style/GlobalStyle'
import { Image, Button } from '../../components/common'
import { errorPageIcon, logo, illust } from '../../assets'

const NoMatch = () => {
  const navigate = useNavigate()

  return (
    <WrapDiv>
      <ContentSection>
        <Image width={175} height={105} src={errorPageIcon} />
        <Image width={350} height={65} src={logo} />
        <p>
          {'주소와 일치하는 페이지가 없습니다.'}
          <br />
          {'입력하신 주소가 정확한지 다시 확인해주세요.'}
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
