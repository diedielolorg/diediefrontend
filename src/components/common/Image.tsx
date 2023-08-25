import React, { useState } from 'react'
import { styled } from 'styled-components'
import Portal from './Portal'
import { ImgProps } from '../../interfaces/CommonTypes'
import { errorImg } from '../../assets'

// ! [props]
// * width, height, $border : props로 내려온 number값에 대해 px값으로 설정
// * src : 이미지 파일명 또는 url
// * alt : 이미지 설명

const Image = ({ width, height, $border, src, alt, $zoom = 'off' }: ImgProps) => {
  const [toggleZoom, setToggleZoom] = useState(false)

  const onZoomClickHandler = () => setToggleZoom(!toggleZoom)

  return (
    <>
      <CommonImg
        width={width}
        height={height}
        $border={$border}
        src={src || errorImg}
        alt={alt || `${src} image`}
        $zoom={$zoom}
        onClick={$zoom !== 'off' ? onZoomClickHandler : undefined}
      />
      {toggleZoom && <Portal type={'ZoomImg'} onclick={onZoomClickHandler} src={src} />}
    </>
  )
}

export default Image

const CommonImg = styled.img<ImgProps>`
  position: relative;
  ${({ width, height }) => `width: ${width}px; height: ${height}px;`};
  ${({ $border }) => `border-radius: ${$border}px;`};
  cursor: ${({ $zoom }) => ($zoom === 'on' ? 'pointer' : 'default')};
  object-fit: contain;
`
