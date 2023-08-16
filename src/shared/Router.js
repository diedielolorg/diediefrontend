import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, MyPage, Ranking, Report, SignIn, SignUp, UserInfo } from '../pages'
import { NoMatch, ErrorPage, AfterLoginPage } from '../pages/status'
import { Layout } from '../components/common'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={''} element={<Main />} />
          <Route path={'mypage'} element={<MyPage />} />
          <Route path={'ranking'} element={<Ranking />} />
          <Route path={'report'} element={<Report />} />
          <Route path={'signin'} element={<SignIn />} />
          <Route path={'signup'} element={<SignUp />} />
          <Route path={'userinfo'} element={<UserInfo />} />
          <Route path={'error'} element={<ErrorPage />} />
          <Route path={'afterlogin'} element={<AfterLoginPage />} />
          <Route path={'*'} element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
