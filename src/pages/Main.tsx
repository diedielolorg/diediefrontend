import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Image } from '../components/common'
import { logo, searchBtn } from '../assets'

const Main = () => {
  // 검색어
  const [searchKeyword, setSearchKeyword] = useState('')

  // ! 임시 08.21. api 명세에 따른 임시 검색 목록 리스트
  const [searchSummonerList, setSearchSummonerList] = useState<{ summonerName: string; summonerIcon: string }[]>([
    {
      summonerName: '방배동 오소리',
      summonerIcon:
        'https://github.com/diedielolorg/diediefrontend/assets/58963027/f6b4ca75-dec5-4aea-8d52-7ef9d4179915',
    },
    {
      summonerName: '방배 휴그랜트',
      summonerIcon:
        'https://github.com/diedielolorg/diediefrontend/assets/58963027/f6b4ca75-dec5-4aea-8d52-7ef9d4179915',
    },
  ])

  // ! 임시 08.21. api 명세에 따른 임시 검색 목록 리스트
  const [searchSummonerList1, setSearchSummonerList1] = useState<{ summonerName: string; summonerIcon: string }[]>([])

  // 검색 입력 이벤트 핸들러  -> ! 임시 08.25. 커스텀 훅으로 뺄 것
  const searchKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  return (
    <>
      <Image src={logo} alt={'로고'} />
      <SearchBoxDiv>
        <SearchInputBoxDiv>
          <SearchInput type={'text'} placeholder={'소환사명을 검색하세요.'} onChange={searchKeywordHandler} />
          <SearchBtn type={'button'}>
            <Image src={searchBtn} alt={'검색창 아이콘'} />
          </SearchBtn>
        </SearchInputBoxDiv>
        <SearchResultBoxDiv searchKeyword={searchKeyword}>
          {searchSummonerList.length > 0 ? (
            searchKeyword &&
            searchSummonerList &&
            searchSummonerList.map((searchSummoner, idx) => {
              return (
                <SearchSummonerBoxDiv>
                  <SearchSummonerInfoDiv>
                    <Image width={26} height={26} src={searchSummoner.summonerIcon} />
                    <SearchSummonerNameP>{searchSummoner.summonerName}</SearchSummonerNameP>
                  </SearchSummonerInfoDiv>
                </SearchSummonerBoxDiv>
              )
            })
          ) : (
            <>
              <div>{'dd'}</div>
              <div>{'없음'}</div>
            </>
          )}
        </SearchResultBoxDiv>
      </SearchBoxDiv>
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
const SearchBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
const SearchResultBoxDiv = styled.div<{ searchKeyword: string }>`
  width: 856px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
  padding-top: calc(31px - 26px); // 검색 결과의 마진 만큼 제외하고 패딩
  padding-bottom: 31px;
  display: ${(props) => (props.searchKeyword.length > 0 ? 'block' : 'none')};
`
const SearchSummonerBoxDiv = styled.div`
  width: 856px;
`
const SearchSummonerInfoDiv = styled.div`
  display: flex;
  height: 26px;
  gap: 9px;
  margin-left: 36px;
  margin-top: 26px;
`
const SearchSummonerNameP = styled.p`
  color: #060606;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
