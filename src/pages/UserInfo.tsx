import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Portal, Button, Badge, Image } from '../components/common'
import { reportImg, arrowUp } from '../assets'

const UserInfo = () => {
  const [toggleIngame, setToggleIngame] = useState(false)

  const toggleIngameHandler = () => setToggleIngame(!toggleIngame)

  return (
    <WrapDiv>
      <InfoSection>
        <div>
          <UserInfoDiv>
            <Image width={100} height={100} border={5} />
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
            <Button size={'l'} color={'basic'}>
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
          <div>{'욕 통계 차트'}</div>
        </SwearWordsDiv>
        <RegionDiv>
          <h2>{'출몰지역 통계'}</h2>
          <div>{'출몰지역 통계 차트'}</div>
        </RegionDiv>
      </ChartSection>

      <ReportSection>
        <ReportCountDiv>
          <h2>{'등록된 신고'}</h2>
          <p>{'총 25개'}</p>
        </ReportCountDiv>
        <div>
          <ReportInfoDiv>
            <MoreBtn>
              {'더보기'}
              <Image width={15} height={8} src={arrowUp} />
            </MoreBtn>
            <div>
              <span>
                <strong>{'욕 카테고리'}</strong>
              </span>
              <Badge category={'fWord'} />
              <Badge category={'aversion'} />
              <Badge category={'adHominem'} />
              <Badge category={'sHarassment'} />
              <Badge category={'immorality'} />
              <Badge category={'etc'} />
            </div>
            <div>
              <span>
                <strong>{'욕한 날짜'}</strong>
              </span>
              <span>{'2023. 07. 27'}</span>
            </div>
            <div>
              <span>
                <strong>{'신고 내용'}</strong>
              </span>
              <p>{'나한테 욕을 했다.'}</p>
              <span>
                <strong>{'스크린샷'}</strong>
              </span>
              <ReportImgDiv>
                <Image width={400} height={285} border={5} src={reportImg} />
                <Image width={400} height={285} border={5} src={reportImg} />
                <Image width={400} height={285} border={5} src={reportImg} />
              </ReportImgDiv>
            </div>
          </ReportInfoDiv>
          <PaginationDiv>{/* 페이지네이션 */}</PaginationDiv>
        </div>
      </ReportSection>
    </WrapDiv>
  )
}

export default UserInfo

const WrapDiv = styled.div`
  padding-top: 75px;
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
`

const InfoSection = styled.section`
  display: flex;
  & > div {
    width: 50%;
  }
  & > div:nth-child(1) {
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
    margin-top: 30px;
    margin-bottom: 16px;
    padding: 15px 25px;
    background: ${({ theme }) => theme.gray.TF};
    border-radius: 10px;
  }
`

const ReportInfoDiv = styled.div`
  padding: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.black};
  span {
    color: ${({ theme }) => theme.gray.AE};
  }
  p {
    height: 50px;
    padding: 15px 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.gray.TT};
    color: ${({ theme }) => theme.color.white};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div > span:nth-child(1) {
    margin-right: 12px;
  }
  & > div:nth-child(4) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`

const MoreBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 35px;
  color: ${({ theme }) => theme.green.basic};
  font-size: 20px;
  font-weight: 600;
  background: transparent;
  img {
    margin-left: 5px;
  }
`

const ReportImgDiv = styled.div`
  display: flex;
  gap: 15px;
`

const PaginationDiv = styled.div`
  //
`
