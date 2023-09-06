import { useQuery } from '@tanstack/react-query'
import { styled } from 'styled-components'
import { PotalProps } from '../../interfaces/CommonTypes'
import { UserListDivProps } from '../../interfaces/ModalTypes'
import { IngameType } from '../../interfaces/UserInfoTypes'
import { Image, Badge, Tier } from '../common'
import { closeIcon, exampleUserIcon } from '../../assets'
import { Loading } from '../../pages/status'
import { getIngame } from '../../axios/userInfo'

const Ingame = ({ nickname, onclick }: PotalProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getIngame'],
    queryFn: () => getIngame(nickname && nickname),
    retry: 1,
  })

  const renderStatus = (type: string) => (
    <>
      <GameInfoSection>
        <div>
          <h1>{'인게임 정보'}</h1>
        </div>
        <button type={'button'} onClick={onclick}>
          <Image src={closeIcon} />
        </button>
      </GameInfoSection>
      <MatchInfoSection>
        <ErrorDiv>{type === 'loading' ? <Loading /> : <h1>{'진행 중인 게임이 없습니다.'}</h1>}</ErrorDiv>
      </MatchInfoSection>
    </>
  )

  const renderUser = (user: IngameType) => (
    <div key={user.championId}>
      <Image width={50} height={50} $border={5} src={user.championImageUrl} />
      <EachUserDiv>
        <p>{user.summonerName}</p>
        {user.reportsData ? (
          <>
            <span>{`전과 ${user.reportsData.reportCount}범`}</span>
            <Badge $category={user.reportsData.category} />
          </>
        ) : (
          <>
            <span>{'모범시민'}</span>
            <Image width={13} height={18} src={exampleUserIcon} />
          </>
        )}
      </EachUserDiv>
      <Tier $tier={user.tierInfo.tier} $rank={user.tierInfo.rank} />
    </div>
  )

  return (
    <BackgroundDiv>
      <ContentDiv>
        {isLoading
          ? renderStatus('loading')
          : error
          ? renderStatus('error')
          : data && (
              <>
                <GameInfoSection>
                  <div>
                    <h1>{'인게임 정보'}</h1>
                    <div>
                      <p>{data.gameMode}</p>
                      <p>{'|'}</p>
                      <p>{data.gameName}</p>
                      <p>{'|'}</p>
                      <p>{data.gameLength}</p>
                    </div>
                  </div>
                  <button type={'button'} onClick={onclick}>
                    <Image src={closeIcon} />
                  </button>
                </GameInfoSection>

                <MatchInfoSection>
                  <UserListDiv $position={'left'}>
                    {data.participants
                      .filter((user: IngameType) => user.teamId === 100)
                      .map((user: IngameType) => renderUser(user))}
                  </UserListDiv>
                  <UserListDiv $position={'right'}>
                    {data.participants
                      .filter((user: IngameType) => user.teamId === 200)
                      .map((user: IngameType) => renderUser(user))}
                  </UserListDiv>
                </MatchInfoSection>
              </>
            )}
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

const ErrorDiv = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${({ theme }) => theme.gray.AE};
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
