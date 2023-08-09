import React from 'react'
import { styled } from 'styled-components'
import { PotalProps } from '../../interfaces/CommonTypes'
import { ModalBackgroundDiv } from '../../style/GlobalStyle'

const Ingame = ({ onclick }: PotalProps) => {
  return (
    <ModalBackgroundDiv onClick={onclick}>
      <ContentDiv>{'call ingame data'}</ContentDiv>
    </ModalBackgroundDiv>
  )
}

export default Ingame

const ContentDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
`
