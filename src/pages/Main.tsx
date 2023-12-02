import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { mainBg, neonLogo, searchBtn } from '../assets'
import { search } from '../axios/main'
import { Image } from '../components/common'
import tips from '../utils/tipsData'

const Main = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isSearchResultBox, setIsSearchResultBox] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchSummonerList, setSearchSummonerList] = useState<
    {
      id: string
      accountId: string
      puuid: string
      name: string
      profileIconId: number
      revisionDate: number
      summonerLevel: number
      profileIconIdUrl: string
    }[]
  >([])

  const [randomTip, setRandomTip] = useState(tips[Math.floor(Math.random() * tips.length)])

  const changeRandomTip = () => {
    const newRandomTip = tips[Math.floor(Math.random() * tips.length)]
    setRandomTip(newRandomTip)
  }

  useEffect(() => {
    const intervalId = setInterval(changeRandomTip, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const searchMutation = useMutation(search, {
    onSuccess: (response) => {
      setSearchSummonerList([response])
      setIsSearchResultBox(true)
    },
  })

  useEffect(() => {
    setIsSearchResultBox(false)
  }, [searchKeyword])

  // 뮤테이션 콜
  const searchMutationCall = () => {
    if (searchKeyword !== '') {
      searchMutation.mutate({
        summonername: searchKeyword,
      })
    }
  }

  // 검색 엔터 핸들러
  const onKeyUpSearchKeywordHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      searchMutationCall()
    }
  }

  // 검색 버튼 핸들러
  const onClickSearchKeywordHandler = () => {
    searchMutationCall()
  }

  // 검색 입력 이벤트 핸들러
  const searchKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
  }

  // 선택 유저 페이지로 이동
  const moveToUserinfoHandler = (name: string) => {
    navigate(`/userinfo/${name}`)
  }
  return (
    <WrapMainBoxDiv>
      <Image width={370} height={80} src={neonLogo} alt={'로고'} />
      <SearchBoxDiv>
        <SearchInputBoxDiv>
          <SearchInput
            type={'text'}
            placeholder={t('소환사명을 검색하세요.')}
            onChange={searchKeywordHandler}
            onKeyUp={onKeyUpSearchKeywordHandler}
          />
          <SearchBtn type={'button'} onClick={onClickSearchKeywordHandler}>
            <Image src={searchBtn} alt={'검색창 아이콘'} />
          </SearchBtn>
        </SearchInputBoxDiv>

        {isSearchResultBox && (
          <SearchResultBoxDiv searchKeyword={searchKeyword}>
            {searchSummonerList.length > 0 ? (
              searchKeyword &&
              searchSummonerList &&
              searchSummonerList.map(({ name, profileIconIdUrl }, idx) => {
                const regex = new RegExp(`(${searchKeyword})`, 'gi')
                const parts = name.split(regex)
                return (
                  <SearchSummonerBoxDiv>
                    <SearchSummonerInfoDiv>
                      <Image width={26} height={26} src={profileIconIdUrl} />
                      <SearchSummonerNameP
                        isResult
                        onClick={() => {
                          moveToUserinfoHandler(name)
                        }}
                      >
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
                  <SearchSummonerNameP isResult={false}>{t('검색된 소환사가 없습니다.')}</SearchSummonerNameP>
                </SearchSummonerInfoDiv>
              </SearchSummonerBoxDiv>
            )}
          </SearchResultBoxDiv>
        )}
        <TipBoxDiv>{t(randomTip)}</TipBoxDiv>
        <BgBoxDiv />
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
  margin-top: 140px;
`
const SearchBoxDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const SearchInputBoxDiv = styled.div`
  display: flex;
  width: 856px;
  height: 86px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
`
const SearchInput = styled.input`
  width: calc(856px - 95px);
  padding: 30px 36px;
  border-radius: 10px;
  color: ${({ theme }) => theme.gray.OS};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
`
const SearchBtn = styled.button`
  width: 95px;
  height: 86px;
  border-radius: 0px 10px 10px 0px;
  background: ${({ theme }) => theme.green.turquoise};
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
  cursor: ${(props) => (props.isResult ? 'pointer' : 'default')};
`
const HighLightedTextSpan = styled.span`
  color: #12b768;
`
const TipBoxDiv = styled.div`
  position: absolute;
  top: calc(86px + 27px);
  z-index: 0;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  text-shadow: 0px 0px 10px ${({ theme }) => theme.color.black};
  font-size: 20px;
  font-weight: 600;
`
const BgBoxDiv = styled.div`
  position: absolute;
  top: 86px;
  z-index: 0;
  width: 100%;
  height: calc(955px - 448px);
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0.9;
  mix-blend-mode: lighten;
`
