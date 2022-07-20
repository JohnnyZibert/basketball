import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'
import { Layout } from './Elements/layout/Layout'
import { NotFoundPage } from './Elements/notFoundPage/NotFoundPage'
import { AddNewPlayers } from './Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
import { AddNewTeams } from './Elements/Page/HomePage/addNewTeamsPage/AddNewTeamsPage'
import { MainContent } from './Elements/Page/HomePage/main/Main'
import { TeamsPage } from './Elements/Page/HomePage/main/teamsPage/TeamsPage'
import { OneTeamPage } from './Elements/Page/HomePage/oneTeamPage/oneTeamPage'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'

function App() {
  return (
    <div>
      <div className={styles.appContainer}>
        {/*<div className={styles.notFoundPage}>*/}
        {/*  <NotFoundPage />*/}
        {/*</div>*/}
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="addNewTeams" element={<AddNewTeams />} />
            <Route path="oneTeam" element={<OneTeamPage />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="addPlayersPage" element={<AddNewPlayers />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
