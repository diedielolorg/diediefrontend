import React from 'react'
import { styled } from 'styled-components'
import { v4 as uuid } from 'uuid'
import { useTranslation } from 'react-i18next'
import { BadgeProps } from '../../interfaces/CommonTypes'

// ! [props]
// * $category : response로 오는 array를 map으로 처리한 string값

const Badge = ({ $category }: BadgeProps) => {
  const uniqueId: string = uuid()
  const { t } = useTranslation()

  return $category.split(',').map((item) => (
    <CommonBadge key={uniqueId + item} $category={item.replaceAll(',', '')}>
      {t(item)}
    </CommonBadge>
  ))
}

export default Badge

const CommonBadge = styled.button<BadgeProps>`
  margin-right: 8px;
  padding: 1px 4px;
  background: transparent;
  font-weight: 700;
  border-radius: 3px;
  cursor: default;
  ${({ $category, theme }) => {
    switch ($category) {
      case '쌍욕':
        return `border: 1px solid ${theme.color.orange}; color: ${theme.color.orange};`
        break
      case '혐오성 발언':
        return `border: 1px solid ${theme.color.blue}; color: ${theme.color.blue};`
        break
      case '인신공격':
        return `border: 1px solid ${theme.color.yellow}; color: ${theme.color.yellow};`
        break
      case '성희롱':
        return `border: 1px solid ${theme.green.neon}; color: ${theme.green.neon};`
        break
      case '패드립':
        return `border: 1px solid ${theme.green.basic}; color: ${theme.green.basic};`
        break
      case '기타':
        return `border: 1px solid ${theme.gray.DE}; color: ${theme.gray.DE};`
        break
      default:
        return `color: ${theme.gray.TT};`
    }
  }}
`
