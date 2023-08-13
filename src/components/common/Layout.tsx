import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const Layout = () => {
  return (
    <BackgroundColor>
      <Header />
      <MaxWidth>
        <Outlet />
      </MaxWidth>
    </BackgroundColor>
  )
}

const BackgroundColor = styled.div`
  width: 100%;
  height: 100%; // 배율 줄였을 때는 고려 X
  min-height: 970px; // 데스크탑, 태블릿 둘 다 최소높이 1100px
  background-color: ${({ theme }) => theme.gray.TO};
`

const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

// ! 임시 Header
const Header = styled.div`
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.color.black};
`
export default Layout
