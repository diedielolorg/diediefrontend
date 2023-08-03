import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const Layout = () => {
  return (
    <BackgroundColor>
      <MaxWidth>
        <Outlet />
      </MaxWidth>
    </BackgroundColor>
  )
}

const BackgroundColor = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.gray.TO};
`

const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
export default Layout
