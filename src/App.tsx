import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'
import { Layout } from './Elements/Layout/Layout'
import { AddNewPlayers } from './Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
import { AddNewTeams } from './Elements/Page/HomePage/addNewTeamsPage/AddNewTeamsPage'
import { OneTeamPage } from './Elements/Page/HomePage/oneTeamPage/oneTeamPage'
import { PlayersPage } from './Elements/Page/HomePage/playersPage/PlayersPage'
import { TeamsPage } from './Elements/Page/HomePage/teamsPage/TeamsPage'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import { NotFoundPage } from './Elements/Page/NotFoundPage/NotFoundPage'
import { OnePlayer } from './Elements/Page/OnePlayer/OnePlayer'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="players" element={<PlayersPage />} />
          <Route path="players/:id" element={<OnePlayer />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="teams/:id" element={<OneTeamPage />} />
          <Route path="teams/newTeams" element={<AddNewTeams />} />
          <Route path="players/addPlayers" element={<AddNewPlayers />} />
        </Route>
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="notfound" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
