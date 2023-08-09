import React from 'react'
import { styled } from 'styled-components'
import { ImgProps } from '../../interfaces/CommonTypes'
import { errorImg } from '../../assets'

// ! [props]
// * width, height, borderRadius : props로 내려온 number값에 대해 px값으로 설정
// * src : 이미지 파일명 또는 url
// * alt : 이미지 설명

const Image = ({ width, height, borderRadius, src, alt }: ImgProps) => {
  return (
    <CommonImg
      width={width}
      height={height}
      borderRadius={borderRadius}
      src={src || errorImg}
      alt={alt || `${src} image`}
    />
  )
}

export default Image

const CommonImg = styled.img<ImgProps>`
  ${({ width, height }) => `width: ${width}px; height: ${height}px;`}
  ${({ borderRadius }) => `border-radius: ${borderRadius}px;`}
  object-fit: contain;
`
