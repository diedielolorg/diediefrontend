import React from 'react'
import { styled } from 'styled-components'
import { PotalProps } from '../../interfaces/CommonTypes'
import { ModalBackgroundDiv } from '../../style/GlobalStyle'
import { zoomOut } from '../../assets'

const ZoomImg = ({ onclick, src }: PotalProps) => {
  return (
    <ModalBackgroundDiv>
      <ZoomInImg src={src} alt={src} />
      <ZoomBtn type={'button'} onClick={onclick}>
        <img src={zoomOut} alt={'zoomIn icon'} />
      </ZoomBtn>
    </ModalBackgroundDiv>
  )
}

export default ZoomImg

const ZoomInImg = styled.img`
  width: 740px;
  height: 500px;
  padding: 10px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.gray.SF};
  border-radius: 10px;
  object-fit: fill;
`

export const ZoomBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 25%;
  right: 26%;
  background-color: transparent;
`
