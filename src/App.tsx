import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LoginPage from './Elements/Page/LoginPage/LoginPage'
import UserProfilePage from './Elements/Page/Profile'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterForm />} />
        <Route path={'/profile'} element={<UserProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
