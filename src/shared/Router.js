import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, MyPage, Ranking, Report, SignIn, SignUp, UserInfo, EditInfo, MyReport } from '../pages'
import { ErrorPage, Completed, Withdrawal, AfterLoginPage } from '../pages/status'
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
          <Route path={'userinfo/:userNickname'} element={<UserInfo />} />
          <Route path={'error'} element={<ErrorPage type={'error'} />} />
          <Route path={'completed'} element={<Completed />} />
          <Route path={'editinfo'} element={<EditInfo />} />
          <Route path={'withdrawal'} element={<Withdrawal />} />
          <Route path={'myReport'} element={<MyReport />} />
          <Route path={'afterlogin'} element={<AfterLoginPage />} />
          <Route path={'*'} element={<ErrorPage type={'noMatch'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
