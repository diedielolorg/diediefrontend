import React from 'react'
import { styled } from 'styled-components'
import { PotalProps } from '../../interfaces/CommonTypes'
import { UserListDivProps } from '../../interfaces/ModalTypes'
import { Image, Badge, Tier } from '../common'
import { closeIcon, exampleUserIcon } from '../../assets'

const Ingame = ({ onclick }: PotalProps) => {
  return (
    <BackgroundDiv>
      <ContentDiv>
        <GameInfoSection>
          <div>
            <h1>{'인게임 정보'}</h1>
            <div>
              <p>{'솔로랭크'}</p>
              <p>{'|'}</p>
              <p>{'소환사 협곡'}</p>
              <p>{'|'}</p>
              <p>{'15분 13초'}</p>
            </div>
          </div>
          <button type={'button'} onClick={onclick}>
            <Image src={closeIcon} />
          </button>
        </GameInfoSection>

        <MatchInfoSection>
          <UserListDiv $position={'left'}>
            <div>
              <Image width={50} height={50} $border={5} />
              <EachUserDiv>
                <p>{'오빤18내맘몰라'}</p>
                <div>
                  <span>{'전과 7범'}</span>
                  <Badge $category={'fWord'} />
                </div>
              </EachUserDiv>
              <Tier $tier={'CHALLENGER'} $rank={''} />
            </div>
            <div>
              <Image width={50} height={50} $border={5} />
              <EachUserDiv>
                <p>{'방배동둠피스트'}</p>
                <span>{'모범시민'}</span>
                <Image width={13} height={18} src={exampleUserIcon} />
              </EachUserDiv>
              <Tier $tier={'EMERALD'} $rank={'III'} />
            </div>
          </UserListDiv>
          <UserListDiv $position={'right'}>
            <div>
              <Image width={50} height={50} $border={5} />
              <EachUserDiv>
                <p>{'축지법아저씨'}</p>
                <div>
                  <span>{'전과 67범'}</span>
                  <Badge $category={'aversion'} />
                </div>
              </EachUserDiv>
              <Tier $tier={'GRANDMASTER'} $rank={''} />
            </div>
            <div>
              <Image width={50} height={50} $border={5} />
              <EachUserDiv>
                <p>{'강아지는애옹'}</p>
                <span>{'전과 33범'}</span>
                <Badge $category={'adHominem'} />
              </EachUserDiv>
              <Tier $tier={'PLATINUM'} $rank={'Ⅳ'} />
            </div>
          </UserListDiv>
        </MatchInfoSection>
      </ContentDiv>
    </BackgroundDiv>
  )
}

export default Ingame

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(23, 23, 23, 0.95);
  backdrop-filter: blur(5px);
`

const ContentDiv = styled.div`
  width: 1050px;
  height: 620px;
  background-color: transparent;
  h1,
  p,
  span {
    font-weight: 800;
    color: ${({ theme }) => theme.color.white};
  }
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 17px;
  }
  span {
    font-size: 15px;
    color: ${({ theme }) => theme.green.basic};
  }
`

const GameInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  div > div {
    margin: 30px 0;
    padding: 15px 25px;
    display: flex;
    gap: 10px;
    background: ${({ theme }) => theme.gray.TF};
    border-radius: 10px;
  }
  p {
    font-weight: 400;
  }
  button {
    height: 100%;
    background: transparent;
  }
  img {
    cursor: pointer;
  }
`

const MatchInfoSection = styled.section`
  display: flex;
  gap: 35px;
  & > div {
    width: 50%;
    padding: 50px 35px;
    border: 2px solid ${({ theme }) => theme.gray.TF};
    border-radius: 10px;
  }
`
const UserListDiv = styled.div<UserListDivProps>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: ${({ $position }) =>
    $position === 'left'
      ? 'linear-gradient(160deg, #000000, #151900, #2c3300)'
      : 'linear-gradient(-160deg, #000000, #151900, #2c3300)'};
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const EachUserDiv = styled.div`
  margin-left: 20px;
  width: 75%;
  div {
    display: flex;
    margin-top: 5px;
    align-items: center;
  }
  button,
  img {
    margin-left: 7px;
  }
`

const RightUserList = styled.div`
  background: linear-gradient(-160deg, #000000, #151900, #2c3300);
`
