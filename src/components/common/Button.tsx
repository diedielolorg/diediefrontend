import React from 'react'
import { styled } from 'styled-components'
import { BtnProps } from '../../interfaces/CommonTypes'

// ! [props]
// * children : 버튼 명
// * size : 버튼 width 사이즈 (xs: 60, s: 90, m: 125, l: 185, xl: 200, xxl: 330)
// * color : 버튼 색상
// * onClick : onClick 이벤트

const Button = ({ children, size, color, onclick }: BtnProps) => {
  return (
    <CommonBtn type={'button'} size={size} color={color} onClick={onclick}>
      {children}
    </CommonBtn>
  )
}

export default Button

const CommonBtn = styled.button<BtnProps>`
  font-weight: 700;
  background: ${({ color, theme }) =>
    color === 'light' ? theme.green.light : color === 'basic' ? theme.green.basic : theme.gray.DE};
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return 'width: 60px; height: 45px; border-radius: 5px; font-size: 15px;'
        break
      case 's':
        return 'width: 90px; height: 45px; border-radius: 5px; font-size: 15px;'
        break
      case 'm':
        return 'width: 125px; height: 45px; border-radius: 10px; font-size: 20px;'
        break
      case 'l':
        return 'width: 185px; height: 50px; border-radius: 10px; font-size: 20px;'
        break
      case 'xl':
        return 'width: 200px; height: 55px; border-radius: 10px; font-size: 20px;'
        break
      case 'xxl':
        return 'width: 330px; height: 55px; border-radius: 10px; font-size: 20px;'
        break
      default:
        return ''
    }
  }}
`
