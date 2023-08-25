import React, { useState } from 'react'
import { styled } from 'styled-components'
import Image from '../components/common/Image'
import logo from '../assets/logo.svg'
import searchBtn from '../assets/searchBtn.svg'

const Main = () => {
  // ! 임시 08.21. api 명세에 따른 임시 검색 목록 리스트
  const [searchSummonerList, setSearchSummonerList] = useState([
    {
      summonerName: '방배동 오소리',
      summonerIcon:
        'https://github.com/diedielolorg/diediefrontend/assets/58963027/f6b4ca75-dec5-4aea-8d52-7ef9d4179915',
    },
    {
      summonerName: '방배휴그랜트',
      summonerIcon:
        'https://github.com/diedielolorg/diediefrontend/assets/58963027/f6b4ca75-dec5-4aea-8d52-7ef9d4179915',
    },
  ])

  return (
    <>
      {/* <Image src={logo} alt={'로고'} /> */}
      <div>
        <SearchInputBoxDiv>
          <SearchInput type={'text'} placeholder={'소환사명을 검색하세요.'} />
          {/* <SearchBtn type={'button'}> */}
          {/* <Image src={searchBtn} alt={'검색창 아이콘'} /> */}
          {/* </SearchBtn> */}
        </SearchInputBoxDiv>
        <SearchResultBoxDiv>
          {searchSummonerList &&
            searchSummonerList.map((searchSummoner, idx) => {
              return (
                <SearchSummonerBoxDiv>
                  <SearchSummonerInfoDiv>
                    {/* <Image width={26} height={26} src={searchSummoner.summonerIcon} /> */}
                    <SearchSummonerNameP>{searchSummoner.summonerName}</SearchSummonerNameP>
                  </SearchSummonerInfoDiv>
                </SearchSummonerBoxDiv>
              )
            })}
        </SearchResultBoxDiv>
      </div>
      <div>{'팁들자리'}</div>
    </>
  )
}

export default Main

const SearchInputBoxDiv = styled.div`
  display: flex;
  width: 856px;
  height: 86px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
`
const SearchInput = styled.input`
  flex: 1;
  width: calc(856px - 95px);
  padding: 30px 36px;
  height: 100%;
  border: 0;
  background: none;
  /* ! 임시 0821 추후 테마.js에 추가할 것 */
  color: #060606;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const SearchBtn = styled.button`
  width: 95px;
  height: 86px;
  border-radius: 0px 10px 10px 0px;
  background: ${({ theme }) => theme.green.basic};
`
const SearchResultBoxDiv = styled.div`
  width: 856px;
`
const SearchSummonerBoxDiv = styled.div`
  width: 856px;
`
const SearchSummonerInfoDiv = styled.div`
  height: 26px;
  gap: 9px;
`
const SearchSummonerNameP = styled.p`
  color: #060606;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
