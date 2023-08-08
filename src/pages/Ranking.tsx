import React from 'react'
import { styled } from 'styled-components'

const Ranking = () => {
  return (
    <>
      <Box>{'임시 헤더'}</Box>
      <RankingContainer>
        <RankinTitleWrap>
          <h1>
            {'2023년 7월 '}
            <span>{'TOP 1'}</span>
          </h1>
        </RankinTitleWrap>
      </RankingContainer>
    </>
  )
}

const Box = styled.div`
  width: 1280px;
  height: 88px;
`

const RankingContainer = styled.div``

const RankinTitleWrap = styled.div`
  width: 1280px;
  height: 217px;
  border-radius: 10px;
  background-color: black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-inline: 80px;
  h1 {
    font-size: 30px;
    font-weight: 400;
    color: ${({ theme }) => theme.green.basic};
  }

  span {
    font-weight: 700;
  }
`
export default Ranking
