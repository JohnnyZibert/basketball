import React from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'
import { Layout } from './Elements/Layout/Layout'
import { AddNewPlayers } from './Elements/Page/AddNewPlayersPage/AddNewPlayersPage'
import { AddNewTeams } from './Elements/Page/AddNewTeamsPage/AddNewTeamsPage'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import { NotFoundPage } from './Elements/Page/NotFoundPage/NotFoundPage'
import { OnePlayer } from './Elements/Page/OnePlayer/OnePlayer'
import { OneTeamPage } from './Elements/Page/OneTeamPage/OneTeamPage'
import { PlayersPage } from './Elements/Page/PlayersPage/PlayersPage'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'
import { TeamsPage } from './Elements/Page/TeamsPage/TeamsPage'

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
          <Route path="teams/update/:id" element={<AddNewTeams />} />
          <Route path="players/addPlayers" element={<AddNewPlayers />} />
          <Route path="players/update/:id" element={<AddNewPlayers />} />
        </Route>
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="notfound" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
