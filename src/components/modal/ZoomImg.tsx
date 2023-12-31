import React, { useState, useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import { PotalProps } from '../../interfaces/CommonTypes'
import { ZoomImgProps } from '../../interfaces/ModalTypes'
import { ModalBackgroundDiv } from '../../style/GlobalStyle'
import { zoomOut } from '../../assets'

const ZoomImg = ({ onclick, src }: PotalProps) => {
  const [width, setWidth] = useState<number | null>(0)
  const [height, setHeight] = useState<number | null>(0)

  const imgRef = useRef<HTMLImageElement | null>(null)

  // * img의 width, height 실제 값을 기준으로 최소/최대값 설정
  useEffect(() => {
    if (imgRef.current) {
      const currentWidth = imgRef.current.naturalWidth
      const currentHeight = imgRef.current.naturalHeight
      setWidth(currentWidth >= 1000 ? 1000 : currentWidth)
      setHeight(currentHeight >= 700 ? 700 : currentHeight)
    }
  }, [width, height])

  return (
    <ModalBackgroundDiv>
      <RelativeDiv>
        <ZoomInImg ref={imgRef} src={src} alt={src} $width={width} $height={height} />
        <ZoomBtn type={'button'} onClick={onclick}>
          <img src={zoomOut} alt={'zoomIn icon'} />
        </ZoomBtn>
      </RelativeDiv>
    </ModalBackgroundDiv>
  )
}

export default ZoomImg

const RelativeDiv = styled.div`
  position: relative;
`

const ZoomInImg = styled.img<ZoomImgProps>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border: 2px solid ${({ theme }) => theme.gray.SF};
  border-radius: 10px;
  object-fit: contain;
`

export const ZoomBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
`
