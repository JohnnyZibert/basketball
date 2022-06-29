import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './Elements/Page/HomePage/header/Header'
import { PlayersPage } from './Elements/Page/HomePage/playersPage'
import { SideBarHome } from './Elements/Page/HomePage/sidebar/SideBarHome'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import Home from './Elements/Page/MainLayout'
import MainLayout from './Elements/Page/MainLayout'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'
import Teams from './Elements/Page/teamPage'

// import Teams from './Elements/Page/teamPage'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBarHome />
      <div>
        <Routes>
          <Route path={''} element={<LoginPage />} />
          <Route path={'register'} element={<RegisterForm />} />
          <Route path="/" element={<MainLayout />}>
            {/*<Route path={'home'} element={<HomePage />} />*/}
            <Route path={'/teams'} element={<Teams />} />
            {/*<Route path={'/players'} element={<PlayersPage />} />*/}
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
