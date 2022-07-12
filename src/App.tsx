import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './Elements/Page/HomePage/header/Header'
import { HomePage } from './Elements/Page/HomePage/HomePage'
import { TeamsPage } from './Elements/Page/HomePage/main/teamsPage/TeamsPage'
import { SideBarHome } from './Elements/Page/HomePage/sidebar/SideBarHome'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBarHome />
      <div>
        <Routes>
          <Route path={'/register'} element={<RegisterForm />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/teams'} element={<TeamsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
