import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { pageState } from '../recoil/PageAtom'
import { Portal, Button, Image, ReportList } from '../components/common'
import { Chart } from '../components'
import { exampleUserIcon } from '../assets'
import { Loading } from './status'
import { getUserInfo } from '../axios/userInfo'
import { ChartDataType } from '../interfaces/UserInfoTypes'

const UserInfo = () => {
  const nickname = useParams().userNickname
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [toggleIngame, setToggleIngame] = useState(false)
  const [sWordData, setSWordData] = useState<ChartDataType>({})
  const [regionData, setRegionData] = useState<ChartDataType>({})

  const { page } = useRecoilValue(pageState)

  // * 유저 정보 조회
  const { data, isLoading } = useQuery({
    queryKey: ['getUserInfo', { page }],
    queryFn: () => getUserInfo({ nickname, page }),
    retry: 1,
    onError: (error: AxiosError) => {
      if (error.response?.status === 500) {
        navigate('/error')
      }
    },
  })

  // * ingame portal 호출
  const toggleIngameHandler = () => setToggleIngame(!toggleIngame)

  // * 날짜 형식 변환
  const dateFormatHandler = (lastPlayTime: string) => {
    const date = new Date(lastPlayTime)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hr = String(date.getHours()).padStart(2, '0')
    const min = String(date.getMinutes()).padStart(2, '0')
    return `${year}.${month}.${day}. ${hr}:${min}`
  }

  // * 유저 정보 set
  useEffect(() => {
    if (data) {
      const userSWord = {
        기타: data.getCussWordData.categoryCounts.기타 || 0,
        성희롱: data.getCussWordData.categoryCounts.성희롱 || 0,
        쌍욕: data.getCussWordData.categoryCounts.쌍욕 || 0,
        인신공격: data.getCussWordData.categoryCounts.인신공격 || 0,
        패드립: data.getCussWordData.categoryCounts.패드립 || 0,
        혐오성발언: data.getCussWordData.categoryCounts.혐오성발언 || 0,
      }
      const userRegion = {
        이벤트게임: data.Event_Game.gameCount || 0,
        자유랭크: data.RANKED_FLEX_SR.gameCount || 0,
        솔로랭크: data.RANKED_SOLO_5x5.gameCount || 0,
        TFT: data.RANKED_TFT.gameCount || 0,
      }
      setSWordData((prev) => ({
        ...prev,
        ...userSWord,
      }))
      setRegionData((prev) => ({
        ...prev,
        ...userRegion,
      }))
    }
  }, [data])

  return (
    <WrapDiv>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <>
            <InfoSection>
              <div>
                <UserInfoDiv>
                  <Image width={100} height={100} $border={5} src={data.profileIconIdUrl} />
                  <div>
                    <h2>{data.rank ? `TOP ${data.rank}` : `No Ranking`}</h2>
                    <h1>{data.summonerName}</h1>
                  </div>
                </UserInfoDiv>
                <UserBtnDiv>
                  <Button size={'l'} color={'light'} onclick={toggleIngameHandler}>
                    {t('인게임 정보 보기')}
                  </Button>
                  {toggleIngame && <Portal type={'Ingame'} onclick={toggleIngameHandler} nickname={nickname} />}
                  <Button
                    size={'l'}
                    color={'basic'}
                    onclick={() => {
                      navigate('/report', { state: { nickname, summonerIcon: data.profileIconIdUrl } })
                    }}
                  >
                    {t('신고하기')}
                  </Button>
                </UserBtnDiv>
              </div>
              <UserRecordDiv>
                {data.getCussWordData.reportCount ? (
                  <h1>
                    {t('전과')}{' '}
                    <strong>{t('{{reportCount}}범', { reportCount: data.getCussWordData.reportCount })}</strong>
                  </h1>
                ) : (
                  <div>
                    <Image height={35} src={exampleUserIcon} />
                    <h1>
                      <strong>{t('모범시민')}</strong>
                    </h1>
                  </div>
                )}
                <h3>
                  {t('솔랭 승률')} <strong>{data.winRate}</strong>
                </h3>
                <h3>
                  {t('주 출몰지역')} <strong>{data.mostPlayedGame}</strong>
                </h3>
                <h3>
                  {t('마지막 플레이 타임')}
                  <strong>{dateFormatHandler(data.lastPlayTime)}</strong>
                </h3>
              </UserRecordDiv>
            </InfoSection>

            <ChartSection>
              <SwearWordsDiv>
                <h2>{t('욕 통계')}</h2>
                <Chart chartData={sWordData} label={'욕 통계'} />
              </SwearWordsDiv>
              <RegionDiv>
                <h2>{t('출몰지역 통계')}</h2>
                <Chart chartData={regionData} label={'출몰지역 통계'} />
              </RegionDiv>
            </ChartSection>

            <ReportSection>
              <ReportCountDiv>
                <h2>{t('등록된 신고')}</h2>
                <p>{t('총 {{reportCount}}개', { reportCount: data.getCussWordData.reportCount })}</p>
              </ReportCountDiv>
              {data.reportData.length ? (
                <ReportList reportlist={data.reportData} reportlength={data.getCussWordData.reportCount} />
              ) : (
                <NoneListDiv>{t('등록된 신고가 없습니다.')}</NoneListDiv>
              )}
            </ReportSection>
          </>
        )
      )}
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
  div {
    display: flex;
    align-items: center;
    gap: 10px;
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
