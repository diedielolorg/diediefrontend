import React from 'react'
import { styled } from 'styled-components'
import { BadgeProps } from '../../interfaces/CommonTypes'

const Badge = ({ category }: BadgeProps) => {
  let swearWord = ''

  if (category === 'fWord') swearWord = '쌍욕'
  else if (category === 'aversion') swearWord = '혐오성 발언'
  else if (category === 'adHominem') swearWord = '인신공격'
  else if (category === 'sHarassment') swearWord = '성희롱'
  else if (category === 'immorality') swearWord = '패드립'
  else swearWord = '기타'

  return <CommonBadge category={category}>{swearWord}</CommonBadge>
}

export default Badge

const CommonBadge = styled.button<BadgeProps>`
  margin-right: 8px;
  padding: 1px 4px;
  background: transparent;
  font-weight: 700;
  border-radius: 3px;
  cursor: default;
  ${({ category, theme }) => {
    switch (category) {
      case 'fWord':
        return `border: 1px solid ${theme.color.orange}; color: ${theme.color.orange};`
        break
      case 'aversion':
        return `border: 1px solid ${theme.color.blue}; color: ${theme.color.blue};`
        break
      case 'adHominem':
        return `border: 1px solid ${theme.color.yellow}; color: ${theme.color.yellow};`
        break
      case 'sHarassment':
        return `border: 1px solid ${theme.green.neon}; color: ${theme.green.neon};`
        break
      case 'immorality':
        return `border: 1px solid ${theme.green.basic}; color: ${theme.green.basic};`
        break
      case 'etc':
        return `border: 1px solid ${theme.gray.DE}; color: ${theme.gray.DE};`
        break
      default:
        return ''
    }
  }}
`
