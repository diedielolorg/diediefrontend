import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { v4 as uuid } from 'uuid'
import { rankingArrow } from '../assets'
import { getRankingInfo } from '../axios/ranking'
import { Badge, Image } from '../components/common'
import { Loading, ErrorPage } from './status'

const Ranking = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const uniqueId: string = uuid()
  const navigate = useNavigate()

  const [selectBox, setSelectBox] = useState(false)
  const [top1Date, setTop1Date] = useState('2023년 11월')
  const onSelectBoxOptionHandler = () => setSelectBox(!selectBox)
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

  type RankingTopType = {
    count: number
    lastAccessTime: string
    losses: number
    mostFrequentWord: string
    rank: number
    summonerName: string
    summonerPhoto: string
    winRate: number
    wins: number
  }

  const [selectedOption, setSelectedOption] = useState<CalendarOption | null>(calendar[4]) // default 23년 11월 설정
  const [rankingList, setRankingList] = useState<RankingDataType[]>([])
  const [rankingTopList, setRankingTopList] = useState<RankingTopType[]>([])
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
      onSuccess: (response: { data: { data: RankingDataType[]; top1: RankingTopType[] } }) => {
        const summonerData: RankingDataType[] = response.data.data
        const topData: RankingTopType[] = response.data.top1
        setRankingTopList(topData)
        setRankingList(summonerData)
      },
    },
  )

  return (
    <RankingContainer>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorPage type={'error'} />
      ) : (
        data && (
          <>
            <RankinTitleWrap>
              <RankingTitleTopItemWrap>
                <p>{top1Date}</p>
                <span>{'TOP 1'}</span>
              </RankingTitleTopItemWrap>

              <RankingTitleBottomWrap key={uniqueId}>
                <RankingTitleBox>
                  <Image width={40} height={40} src={!rankingTopList[0] ? '' : rankingTopList[0].summonerPhoto} />
                  <h2>{!rankingTopList[0] ? '-' : rankingTopList[0].summonerName}</h2>
                </RankingTitleBox>
                <ReportAccruedCountWrap>
                  <h3>{t('이번 달 신고 횟수')}</h3>
                  <p>
                    {t('전과')} {t('{{reportCount}}범', { reportCount: rankingTopList[0]?.count || 0 })}
                  </p>
                </ReportAccruedCountWrap>
                <MajorCurseWrap>
                  <h3>{t('주요 욕 카테고리')}</h3>
                  <Badge $category={!rankingTopList[0] ? '없음' : rankingTopList[0].mostFrequentWord} />
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
                          setTop1Date(option.label)
                        }}
                      >
                        <p>{option.label}</p>
                      </RankingSelectBoxOption>
                    ))}
                  </RankingSelectBoxOptionWrap>
                )}
              </RankingSelectBoxWrap>
            </RankingCalendarContainer>

            <RankingBodyHeader $lang={currentLang}>
              <p>{'#'}</p>
              <p>{t('소환사')}</p>
              <p>{t('신고 횟수')}</p>
              <p>{t('최근 접속 시간')}</p>
              <p>{t('승률')}</p>
              <p>{t('주요 욕')}</p>
            </RankingBodyHeader>

            {!rankingList.length && (
              <NoRankingDataWrap>
                <p>{`${top1Date} 신고 내역이 없습니다.`}</p>
              </NoRankingDataWrap>
            )}

            {rankingList &&
              rankingList.map((item) => {
                return (
                  <RankingBodyItem key={item.rank}>
                    <RankingBodyNumber>{item.rank}</RankingBodyNumber>
                    <RankinBodySummonerWrap>
                      <Image width={35} height={35} src={item.summonerPhoto} />
                      <RankinBodySummoner onClick={() => navigate(`/userInfo/${item.summonerName}`)}>
                        {item.summonerName}
                      </RankinBodySummoner>
                    </RankinBodySummonerWrap>
                    <RankingReportsNumber>{`${t('전과')} ${item.count}${t('범')}`}</RankingReportsNumber>
                    <RankingLatestTime>{item.lastAccessTime}</RankingLatestTime>
                    <ProgressContainer>
                      <WinRateProgress $width={item.winRate}>
                        <span>{`${item.wins}W`}</span>
                      </WinRateProgress>
                      <LoseRate>{`${item.losses}L`}</LoseRate>
                      <p>{`${item.winRate}%`}</p>
                    </ProgressContainer>
                    <RankingMajorDesire>
                      <Badge $category={item.mostFrequentWord} />
                    </RankingMajorDesire>
                  </RankingBodyItem>
                )
              })}
          </>
        )
      )}
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
  h2 {
    font-size: 40px;
    font-weight: 700;
  }
`

const RankingTitleBox = styled.div`
  display: flex;
  gap: 15px;
  img {
    width: 50px;
  }
`

const ReportAccruedCountWrap = styled.div`
  margin-left: 220px;
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

const MajorCurseWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 100px;
  h3 {
    font-size: 15px;
    font-weight: 500;
  }
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

const RankingBodyHeader = styled.div<{ $lang: string }>`
  width: 1280px;
  height: 43px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 6px;
  padding-right: 31px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  p {
    position: absolute;
  }
  p:nth-child(1) {
    left: 10px;
  }
  p:nth-child(2) {
    left: 4.5%;
  }
  p:nth-child(3) {
    left: 40.8%;
  }
  p:nth-child(4) {
    left: 52.8%;
  }
  p:nth-child(5) {
    left: 68.8%;
  }
  p:nth-child(6) {
    left: 89.3%;
  }
`

const RankingBodyItem = styled.div`
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
  align-items: center;
  margin-left: 46px;
  width: 440px;
  img {
    width: 35px;
    height: 35px;
    border-radius: 3px;
  }
`

const RankinBodySummoner = styled.button`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 700;
  background: transparent;
  color: ${({ theme }) => theme.color.white};
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
  span {
    position: absolute;
    top: 2px;
    font-size: 12px;
    font-weight: 700;
  }
  p {
    position: absolute;
    top: -4px;
    right: -55px;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.white};
  }
`

const WinRateProgress = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}%;
  height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: none;
  background: ${({ theme }) => theme.green.basic};
  transition: width 1s ease;
  color: ${({ theme }) => theme.color.black};
  span {
    left: 10px;
  }
`

const LoseRate = styled.span`
  right: 10px;
`

const RankingMajorDesire = styled.div`
  width: 85px;
  margin-left: 110px;
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
  z-index: 1;
`

const RankingSelectBoxOption = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 14px;
  font-size: 15px;
  &:hover {
    transition: all 0.4s;
    background-color: ${({ theme }) => theme.gray.DE};
  }
`

const NoRankingDataWrap = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${({ theme }) => theme.gray.SF};
`

export default Ranking
