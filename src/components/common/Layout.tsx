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
  height: 100%;
  background-color: ${({ theme }) => theme.gray.TO};
`

const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`

// ! 임시 Header
const Header = styled.div`
  width: 100%;
  height: 88px;
  background-color: ${({ theme }) => theme.color.black};
`
export default Layout
