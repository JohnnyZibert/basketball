import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './Elements/Page/HomePage/HomePage'
import { PlayersPage } from './Elements/Page/HomePage/playersPage'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'
// import Teams from './Elements/Page/teamPage'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterForm />} />
        <Route path={'/home'} element={<Home />} />
        {/*<Route path={'/home/teams'} element={<Teams />} />*/}
        <Route path={'/home/players'} element={<PlayersPage />} />
      </Routes>
    </div>
  )
}

export default App
