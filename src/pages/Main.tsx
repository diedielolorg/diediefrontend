import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Image } from '../components/common'
import { logo, searchBtn } from '../assets'
import tips from '../utils/tipsData'

const Main = () => {
  // 검색어
  const [searchKeyword, setSearchKeyword] = useState('')

  const randomTip = tips[Math.floor(Math.random() * tips.length)]

  // ! 임시 08.21. api 명세에 따른 임시 검색 목록 리스트
  const [searchSummonerList, setSearchSummonerList] = useState<{ summonerName: string; summonerIcon: string }[]>([
    {
      summonerName: '방랑오소리',
      summonerIcon:
        'https://github.com/diedielolorg/diediefrontend/assets/58963027/f6b4ca75-dec5-4aea-8d52-7ef9d4179915',
    },
    {
      summonerName: '방배동휴그랜트',
      summonerIcon:
        'https://github.com/diedielolorg/diediefrontend/assets/58963027/f6b4ca75-dec5-4aea-8d52-7ef9d4179915',
    },
  ])

  // ! 임시 08.21.
  const [searchSummonerList1, setSearchSummonerList1] = useState<{ summonerName: string; summonerIcon: string }[]>([])

  // 검색 입력 이벤트 핸들러
  const searchKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  return (
    <WrapMainBoxDiv>
      <Image width={338} height={66} src={logo} alt={'로고'} />
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
            searchSummonerList.map(({ summonerName, summonerIcon }, idx) => {
              const regex = new RegExp(`(${searchKeyword})`, 'gi') // 검색어 일치 정규식
              const parts = summonerName.split(regex)
              return (
                <SearchSummonerBoxDiv>
                  <SearchSummonerInfoDiv>
                    <Image width={26} height={26} src={summonerIcon} />
                    <SearchSummonerNameP isResult>
                      {parts.map((part, idx) =>
                        part.toLowerCase() === searchKeyword.toLowerCase() ? (
                          <HighLightedTextSpan>{part}</HighLightedTextSpan>
                        ) : (
                          <span>{part}</span>
                        ),
                      )}
                    </SearchSummonerNameP>
                  </SearchSummonerInfoDiv>
                </SearchSummonerBoxDiv>
              )
            })
          ) : (
            <SearchSummonerBoxDiv>
              <SearchSummonerInfoDiv>
                <SearchSummonerNameP isResult={false}>{'검색된 소환사가 없습니다.'}</SearchSummonerNameP>
              </SearchSummonerInfoDiv>
            </SearchSummonerBoxDiv>
          )}
        </SearchResultBoxDiv>
        <TipBoxDiv>{randomTip}</TipBoxDiv>
      </SearchBoxDiv>
    </WrapMainBoxDiv>
  )
}

export default Main

const WrapMainBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 54px;
  margin-top: 143px;
  /* TODO 반응형 추가해야함 */
`
const SearchInputBoxDiv = styled.div`
  display: flex;
  width: 856px;
  height: 86px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
`
const SearchBoxDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
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
  z-index: 1;
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
const SearchSummonerNameP = styled.p<{ isResult: boolean }>`
  color: ${(props) => (props.isResult ? '#060606' : '#727272')};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const HighLightedTextSpan = styled.span`
  color: ${({ theme }) => theme.green.dark};
`
const TipBoxDiv = styled.div`
  position: absolute;
  top: calc(86px + 27px);
  z-index: 0;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  text-shadow: 0px 0px 10px ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`
