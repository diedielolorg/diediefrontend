import React from 'react'
import { styled } from 'styled-components'
import { TierProps } from '../../interfaces/CommonTypes'

const Tier = ({ tier, rank }: TierProps) => {
  let userTier = tier === 'GRANDMASTER' ? 'GM' : tier?.slice(0, 1)

  if (rank === 'I') userTier += '1'
  else if (rank === 'II') userTier += '2'
  else if (rank === 'III') userTier += '3'
  else if (rank === 'Ⅳ') userTier += '4'

  return (
    <CommonTier type={'button'} tier={tier}>
      {userTier}
    </CommonTier>
  )
}

export default Tier

const CommonTier = styled.button<TierProps>`
  width: 35px;
  height: 35px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 3px;
  cursor: default;
  background: ${({ tier, theme }) => {
    switch (tier) {
      case 'IRON':
        return theme.rank.ir
        break
      case 'BRONZE':
        return theme.rank.br
        break
      case 'SILVER':
        return theme.rank.si
        break
      case 'GOLD':
        return theme.rank.go
        break
      case 'PLATINUM':
        return theme.rank.pl
        break
      case 'EMERALD':
        return theme.rank.em
        break
      case 'DIAMOND':
        return theme.rank.di
        break
      case 'MASTER':
        return theme.rank.ma
        break
      case 'GRANDMASTER':
        return theme.rank.gr
        break
      case 'CHALLENGER':
        return theme.rank.ch
        break
      default:
        return ''
    }
  }};
`
