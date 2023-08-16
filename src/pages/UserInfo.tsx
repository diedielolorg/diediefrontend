import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Portal, Button, Image, ReportList } from '../components/common'
import { SwordChart, RegionChart } from '../components'
import { reportImg, errorImg, errorPageIcon } from '../assets'

const UserInfo = () => {
  const [toggleIngame, setToggleIngame] = useState(false)
  // ! report 임시 data
  const [reportList, setReportList] = useState([
    {
      reportId: 1,
      cussWord: ['fWord'],
      reportDate: '2023-07-27',
      reportPayload:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      reportCapture: [reportImg, errorImg, errorPageIcon],
    },
    {
      reportId: 2,
      cussWord: ['aversion'],
      reportDate: '2023-07-27',
      reportPayload:
        '공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.',
      reportCapture: [reportImg],
    },
    {
      reportId: 3,
      cussWord: ['fWord', 'adHominem'],
      reportDate: '2023-07-28',
      reportPayload: '나한테 욕을 했다. 어떻게 그럴 수 있지?',
      reportCapture: [reportImg, errorImg],
    },
    {
      reportId: 4,
      cussWord: ['sHarassment'],
      reportDate: '2023-07-29',
      reportPayload: '나한테 욕을 했다. 마음이 아팠다.',
      reportCapture: [reportImg],
    },
    {
      reportId: 5,
      cussWord: ['immorality', 'etc'],
      reportDate: '2023-07-30',
      reportPayload:
        '헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.',
      reportCapture: [reportImg, errorImg],
    },
  ])

  const navigate = useNavigate()
  const toggleIngameHandler = () => setToggleIngame(!toggleIngame)

  return (
    <WrapDiv>
      <InfoSection>
        <div>
          <UserInfoDiv>
            <Image width={100} height={100} $border={5} />
            <div>
              <h2>{'TOP 12'}</h2>
              <h1>{'방배동둠피스트'}</h1>
            </div>
          </UserInfoDiv>
          <UserBtnDiv>
            <Button size={'l'} color={'light'} onclick={toggleIngameHandler}>
              {'인게임 정보 보기'}
            </Button>
            {/* // TODO API 호출 UserInfo.tsx or Portal.tsx */}
            {toggleIngame && <Portal type={'Ingame'} onclick={toggleIngameHandler} />}
            <Button size={'l'} color={'basic'} onclick={() => navigate('/report')}>
              {'신고하기'}
            </Button>
          </UserBtnDiv>
        </div>
        <UserRecordDiv>
          <h1>
            {'전과'} <strong>{'45범'}</strong>
          </h1>
          <h3>
            {'승률'} <strong>{'80%'}</strong>
          </h3>
          <h3>
            {'주 출몰지역'} <strong>{'랭크'}</strong>
          </h3>
          <h3>
            {'마지막 플레이 타임'} <strong>{'2023. 07. 27. 18:00'}</strong>
          </h3>
        </UserRecordDiv>
      </InfoSection>

      <ChartSection>
        <SwearWordsDiv>
          <h2>{'욕 통계'}</h2>
          <SwordChart />
        </SwearWordsDiv>
        <RegionDiv>
          <h2>{'출몰지역 통계'}</h2>
          <RegionChart />
        </RegionDiv>
      </ChartSection>

      <ReportSection>
        <ReportCountDiv>
          <h2>{'등록된 신고'}</h2>
          <p>{`총 ${reportList.length}개`}</p>
        </ReportCountDiv>
        {reportList.length === 0 ? (
          <NoneListDiv>{'등록된 신고가 없습니다.'}</NoneListDiv>
        ) : (
          <ReportList reportlist={reportList} />
        )}
      </ReportSection>
    </WrapDiv>
  )
}

export default UserInfo

const WrapDiv = styled.div`
  padding-top: 75px;
  padding-bottom: 110px;
  p,
  span,
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.color.white};
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  h2 {
    font-size: 25px;
    font-weight: 700;
  }
  h3 {
    font-size: 20px;
  }
  strong {
    font-weight: 700;
  }
  canvas {
    margin: -20px auto 0 auto;
  }
`

const InfoSection = styled.section`
  display: flex;
  & > div:nth-child(1) {
    width: 50%;
    border-right: 1px solid ${({ theme }) => theme.gray.SF};
  }
`

const ChartSection = styled.section`
  height: 380px;
  margin-top: 80px;
  display: flex;
  & > div {
    width: 50%;
    padding: 25px 35px;
  }
`

const ReportSection = styled.section`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
`

const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 100%;
    padding: 0 25px;
  }
  div > h2 {
    color: ${({ theme }) => theme.green.basic};
  }
`

const UserBtnDiv = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;
`

const UserRecordDiv = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  h2 {
    margin-bottom: 25px;
  }
  h1 > strong {
    color: ${({ theme }) => theme.green.basic};
  }
  h3 > strong {
    margin-left: 15px;
  }
`

const SwearWordsDiv = styled.div`
  border-radius: 10px 0px 0px 10px;
  background: ${({ theme }) => theme.gray.TF};
`

const RegionDiv = styled.div`
  border-radius: 0px 10px 10px 0px;
  background: ${({ theme }) => theme.gray.TT};
`

const ReportCountDiv = styled.div`
  p {
    width: 100px;
    margin: 30px 0;
    padding: 15px 0;
    text-align: center;
    background: ${({ theme }) => theme.gray.TF};
    border-radius: 10px;
  }
`

const NoneListDiv = styled.div`
  margin: 50px 0;
  color: ${({ theme }) => theme.gray.AE};
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`
