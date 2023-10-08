import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Header from './Header'

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
  min-height: 955px;
  background-color: ${({ theme }) => theme.gray.TO};
`

const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export default Layout
