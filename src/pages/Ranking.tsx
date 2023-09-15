import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { styled } from 'styled-components'
import { rankingArrow } from '../assets'
import { getRankingInfo } from '../axios/ranking'

const Ranking = () => {
  const [selectBox, setSelectBox] = useState(false)

  const onSelectBoxOptionHandler = () => {
    setSelectBox(!selectBox)
  }
  interface CalendarOption {
    value: string
    label: string
  }

  const calendar: CalendarOption[] = [
    { value: '2021-01', label: '2023년 07월' },
    { value: '2021-02', label: '2023년 08월' },
    { value: '2023-09', label: '2023년 09월' },
    { value: '2023-10', label: '2023년 10월' },
    { value: '2023-11', label: '2023년 11월' },
    { value: '2023-12', label: '2023년 12월' },
  ]

  type RankingDataType = {
    cussWordStats: string
    summonerName: string
    summonerPhoto: string
    winRate: number
    wins: number
    losses: number
    rank: number
    count: number
    lastAccessTime: string
    mostFrequentWord: string
  }
  const [selectedOption, setSelectedOption] = useState<CalendarOption | null>(calendar[0])
  const [rankingList, setRankingList] = useState<RankingDataType[]>([])
  const handleSelectChange = (value: string) => {
    const selectedOption = calendar.find((option) => option.value === value) || null
    setSelectedOption(selectedOption)
  }
  const { isLoading, isError, data } = useQuery(
    ['RankingInfo', selectedOption],
    () => {
      if (selectedOption !== null) {
        return getRankingInfo({ month: selectedOption.value })
      }
      return {}
    },
    {
      onSuccess: (response: { data: RankingDataType[] }) => {
        const summonerData: RankingDataType[] = response.data
        setRankingList(summonerData)
      },
      onError: (error) => {
        console.log('error', error)
      },
    },
  )
  useEffect(() => {
    console.log('rankingList', rankingList)
  }, [rankingList])
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
            {/* <Badge category={'aversion'} /> */}
          </MajorCurseWrap>
        </RankingTitleBottomWrap>
      </RankinTitleWrap>

      <RankingCalendarContainer>
        <RankingH2Wrap>
          <h2>{'TOP'}</h2>
          <p>{'100'}</p>
        </RankingH2Wrap>
        <RankingSelectBoxWrap>
          <RankingSelectBoxLabel
            type={'button'}
            onClick={() => {
              handleSelectChange(selectedOption?.value || '')
              onSelectBoxOptionHandler()
            }}
          >
            {selectedOption?.label}
            <img src={rankingArrow} alt={'화살표 아이콘'} />
          </RankingSelectBoxLabel>
          {selectBox && (
            <RankingSelectBoxOptionWrap>
              {calendar.map((option) => (
                <RankingSelectBoxOption
                  type={'button'}
                  key={option.value}
                  onClick={() => {
                    handleSelectChange(option.value)
                    onSelectBoxOptionHandler()
                  }}
                >
                  <p>{option.label}</p>
                </RankingSelectBoxOption>
              ))}
            </RankingSelectBoxOptionWrap>
          )}
        </RankingSelectBoxWrap>
      </RankingCalendarContainer>

      <RankingBodyHeader>
        <p>{'#'}</p>
        <Summoner>{'소환사'}</Summoner>
        <ReportsNumber>{'신고 횟수'}</ReportsNumber>
        <LatestTime>{'최근 접속 시간'}</LatestTime>
        <WinningRate>{'승률'}</WinningRate>
        <MajorDesire>{'주요 욕'}</MajorDesire>
      </RankingBodyHeader>

      {rankingList &&
        rankingList.map((item, idx) => {
          return (
            <RankinBodyItem>
              <RankingBodyNumber>{item.rank}</RankingBodyNumber>
              <RankinBodySummonerWrap>
                <img src={item.summonerPhoto} alt={'인게임 아이콘'} />
                <RankinBodySummoner>{item.summonerName}</RankinBodySummoner>
              </RankinBodySummonerWrap>
              <RankingReportsNumber>{`전과 ${item.count}범`}</RankingReportsNumber>
              <RankingLatestTime>{item.lastAccessTime}</RankingLatestTime>
              <ProgressContainer>
                <Progress width={item.winRate} />
                <p>{`${item.winRate}%`}</p>
              </ProgressContainer>
              <RankingMajorDesire>
                <MajorCurseCategory>{item.mostFrequentWord}</MajorCurseCategory>
              </RankingMajorDesire>
            </RankinBodyItem>
          )
        })}
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
    left: 556px;
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
  margin-left: 348px;
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

const MajorCurseCategory = styled.p`
  display: block;
  width: fit-content;
  padding: 1.5px 2px;
  border: 1px solid ${({ theme }) => theme.green.basic};
  color: ${({ theme }) => theme.green.basic};
  text-align: center;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
`

const RankingCalendarContainer = styled.div`
  margin: 42px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-left: 417px;
`

const LatestTime = styled.p`
  margin-left: 93px;
`

const WinningRate = styled.p`
  margin-left: 120px;
`

const MajorDesire = styled.p`
  margin-left: 254px;
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
const RankinBodySummonerWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  img {
    width: 35px;
    height: 35px;
    position: absolute;
    top: -5px;
    left: 40px;
    border-radius: 3px;
  }
`

const RankinBodySummoner = styled.p`
  margin-left: 46px;
  padding-left: 40px;
  font-size: 20px;
  font-weight: 700;
  width: 440px;
`

const RankingReportsNumber = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 151px;
  margin-left: 20px;
`

const RankingLatestTime = styled.p`
  width: 165px;
  font-size: 20px;
  font-weight: 500;
`

const ProgressContainer = styled.div`
  margin-left: 40px;
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

const Progress = styled.div<{ width: number }>`
  width: 50%;
  height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background: ${({ theme }) => theme.green.basic};
  transition: width 1s ease;
  border: none;
`

const RankingMajorDesire = styled.div`
  width: 85px;
  margin-left: 128px;
  font-size: 20px;
  font-weight: 500;
`

const RankingSelectBoxWrap = styled.div`
  position: relative;
`

const RankingSelectBoxLabel = styled.button`
  width: 137px;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-family: SUIT;
  font-size: 15px;
  font-weight: 700;
  padding-inline: 13px;
`

const RankingSelectBoxOptionWrap = styled.div`
  position: absolute;
  top: 38px;
  width: 137px;
  height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
`

const RankingSelectBoxOption = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 14px;
  font-family: SUIT;
  font-size: 15px;
  &:hover {
    transition: all 0.4s;
    background-color: ${({ theme }) => theme.gray.DE};
  }
`

export default Ranking
