import React from 'react'
import { styled } from 'styled-components'

// ! [props]
// * children : 버튼 명
// * size : 버튼 width 사이즈 (xs: 60, s: 90, m: 125, l: 185, xl: 200, xxl: 330)
// * color : 버튼 색상
// * onClick : onClick 이벤트

interface BtnType {
  children?: string
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  color?: 'light' | 'basic' | 'gray'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, size, color, onClick }: BtnType) => {
  return (
    <CommonBtn type={'button'} size={size} color={color} onClick={onClick}>
      {children}
    </CommonBtn>
  )
}

const sizeHandler = ({ size }: BtnType) => {
  switch (size) {
    case 'xs':
      return 'width: 60px; height: 45px;'
    case 's':
      return 'width: 90px; height: 45px;'
    case 'm':
      return 'width: 125px; height: 45px;'
    case 'l':
      return 'width: 185px; height: 50px;'
    case 'xl':
      return 'width: 200px; height: 55px;'
    case 'xxl':
      return 'width: 330px; height: 55px;'
    default:
      return ''
  }
}

export default Button

const CommonBtn = styled.button<BtnType>`
  ${(props) => sizeHandler(props)};
  border-radius: ${({ size }) => (size === 'xs' || size === 's' ? '5px' : '10px')};
  font-size: ${({ size }) => (size === 'xs' || size === 's' ? '15px' : '20px')};
  font-weight: 700;
  background: ${({ color, theme }) =>
    color === 'light' ? theme.green.light : color === 'basic' ? theme.green.basic : theme.gray.DE};
`
