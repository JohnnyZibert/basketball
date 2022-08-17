import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'
import { Layout } from './Elements/layout/Layout'
import { AddNewPlayers } from './Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
import { AddNewTeams } from './Elements/Page/HomePage/addNewTeamsPage/AddNewTeamsPage'
import { PlayersPage } from './Elements/Page/HomePage/main/playersPage/PlayersPage'
import { TeamsPage } from './Elements/Page/HomePage/main/teamsPage/TeamsPage'
import { OneTeamPage } from './Elements/Page/HomePage/oneTeamPage/oneTeamPage'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'

function App() {
  return (
    <div>
      <div className={styles.appContainer}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="players" element={<PlayersPage />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="teams/:id" element={<OneTeamPage />} />
            <Route path="teams/newTeams" element={<AddNewTeams />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="players/addPlayers" element={<AddNewPlayers />} />
            <Route path="login" element={<LoginPage />} />
            {/*<Route path="*" element={<NotFoundPage />} />*/}
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
