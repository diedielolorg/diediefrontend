import React from 'react'
import { styled } from 'styled-components'

const Ranking = () => {
  return (
    <RankingContainer>
      <RankinTitleWrap>
        <RankingTitleTopItemWrap>
          <p>{'2023년 7월'}</p>
          <span>{'TOP 1'}</span>
        </RankingTitleTopItemWrap>
        <RankingTitleBottomWrap>
          <h2>{'방배동둠피스트'}</h2>
          <ReportAccruedCountWrap>
            <h3>{'누적 신고 횟수'}</h3>
            <p>{'전과 724범'}</p>
          </ReportAccruedCountWrap>
          <ReportThisMonthCountWrap>
            <h3>{'이번 달 신고 횟수'}</h3>
            <p>{'25회'}</p>
          </ReportThisMonthCountWrap>
          <MajorCurseWrap>
            <h3>{'주요 욕 카테고리'}</h3>
            <MajorCurseCategory>{'성희롱'}</MajorCurseCategory>
          </MajorCurseWrap>
        </RankingTitleBottomWrap>
      </RankinTitleWrap>

      <RankingCalendarContainer>
        <RankingH2Wrap>
          <h2>{'TOP'}</h2>
          <p>{'100'}</p>
        </RankingH2Wrap>
      </RankingCalendarContainer>

      <RankingBodyHeader>
        <p>{'#'}</p>
        <Summoner>{'소환사'}</Summoner>
        <ReportsNumber>{'신고 횟수'}</ReportsNumber>
        <LatestTime>{'최근 접속 시간'}</LatestTime>
        <WinningRate>{'승률'}</WinningRate>
        <MajorDesire>{'주요 욕'}</MajorDesire>
      </RankingBodyHeader>

      <RankinBodyItem>
        <RankingBodyNumber>{'1'}</RankingBodyNumber>
        <RankinBodySummoner>{'방배동둠피스트'}</RankinBodySummoner>
        <RankingReportsNumber>{'전과 713범'}</RankingReportsNumber>
        <RankingLatestTime>{'23. 07. 25. 13:00'}</RankingLatestTime>
        <ProgressContainer>
          <Progress />
          <p>{'50%'}</p>
        </ProgressContainer>
        <RankingMajorDesire>
          <MajorCurseCategory>{'성희롱'}</MajorCurseCategory>
        </RankingMajorDesire>
      </RankinBodyItem>

      <RankinBodyItem>
        <RankingBodyNumber>{'2'}</RankingBodyNumber>
        <RankinBodySummoner>{'방배동둠피스트'}</RankinBodySummoner>
        <RankingReportsNumber>{'전과 713범'}</RankingReportsNumber>
        <RankingLatestTime>{'23. 07. 25. 13:00'}</RankingLatestTime>
        <ProgressContainer>
          <Progress />
          <p>{'50%'}</p>
        </ProgressContainer>
        <RankingMajorDesire>
          <MajorCurseCategory>{'성희롱'}</MajorCurseCategory>
        </RankingMajorDesire>
      </RankinBodyItem>

      <RankinBodyItem>
        <RankingBodyNumber>{'3'}</RankingBodyNumber>
        <RankinBodySummoner>{'방배동둠피스트'}</RankinBodySummoner>
        <RankingReportsNumber>{'전과 713범'}</RankingReportsNumber>
        <RankingLatestTime>{'23. 07. 25. 13:00'}</RankingLatestTime>
        <ProgressContainer>
          <Progress />
          <p>{'50%'}</p>
        </ProgressContainer>
        <RankingMajorDesire>
          <MajorCurseCategory>{'성희롱'}</MajorCurseCategory>
        </RankingMajorDesire>
      </RankinBodyItem>
    </RankingContainer>
  )
}

const RankingContainer = styled.div`
  margin-top: 27px;
`

const RankinTitleWrap = styled.div`
  width: 1280px;
  height: 217px;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
  padding-inline: 79px;
`

const RankingTitleTopItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.green.basic};
  font-size: 30px;
  p {
    font-weight: 400;
  }

  span {
    font-family: Rowdies;
    font-weight: 700;
    margin-bottom: 2.5px;
  }
`

const RankingTitleBottomWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.color.white};

  &::before {
    content: '';
    position: absolute;
    left: 304px;
    width: 2px;
    height: 68px;
    background-color: #5e5e5e;
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
  }
`

const ReportAccruedCountWrap = styled.div`
  margin-left: 118px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  h3 {
    font-size: 15px;
    font-weight: 500;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }
`

const ReportThisMonthCountWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 73px;

  h3 {
    font-size: 15px;
    font-weight: 500;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }
`

const MajorCurseWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 60px;

  h3 {
    font-size: 15px;
    font-weight: 500;
  }
`

const MajorCurseCategory = styled.span`
  width: 50px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.green.basic};
  color: ${({ theme }) => theme.green.basic};
  text-align: center;
  padding-block: 1.5px;
  padding-inline: 3px;
  border-radius: 3px;
`

const RankingCalendarContainer = styled.div`
  margin: 42px 0 20px 0;
`

const RankingH2Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.green.basic};
  font-family: Rowdies;
  font-size: 40px;
  font-weight: 900;
`

const RankingBodyHeader = styled.div`
  width: 1280px;
  height: 43px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  padding-right: 31px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
`

const Summoner = styled.p`
  margin-left: 45px;
`

const ReportsNumber = styled.p`
  margin-left: 283px;
`

const LatestTime = styled.p`
  margin-left: 77px;
`

const WinningRate = styled.p`
  margin-left: 104px;
`

const MajorDesire = styled.p`
  margin-left: 223px;
`

const RankinBodyItem = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 31px 25px 8px;
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.gray.SF};
`

const RankingBodyNumber = styled.h3`
  width: 10px;
  font-size: 20px;
  font-weight: 900;
  color: ${({ theme }) => theme.green.basic};
`

const RankinBodySummoner = styled.p`
  margin-left: 46px;
  font-size: 20px;
  font-weight: 700;
`

const RankingReportsNumber = styled.p`
  margin-left: 203px;
  font-size: 20px;
  font-weight: 500;
`

const RankingLatestTime = styled.p`
  margin-left: 51px;
  font-size: 20px;
  font-weight: 500;
`

const ProgressContainer = styled.div`
  margin-left: 51px;
  width: 154px;
  height: 20px;
  background: ${({ theme }) => theme.gray.SF};
  border-radius: 3px;
  position: relative;
  &::before {
    content: '15W';
    position: absolute;
    left: 6px;
    top: 3px;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
  }

  &::after {
    content: '15L';
    position: absolute;
    right: 6px;
    top: 3px;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.white};
  }
  p {
    position: absolute;
    top: -3px;
    right: -55px;
    font-size: 20px;
  }
`

const Progress = styled.div`
  width: 50%;
  height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background: ${({ theme }) => theme.green.basic};
  transition: width 1s ease;
  border: none;
`

const RankingMajorDesire = styled.p`
  margin-left: 98px;
  font-size: 20px;
  font-weight: 500;
`

export default Ranking
