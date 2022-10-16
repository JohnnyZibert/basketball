import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'
import { Layout } from './Elements/layout/Layout'
import { AddNewPlayers } from './Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
import { AddNewTeams } from './Elements/Page/HomePage/addNewTeamsPage/AddNewTeamsPage'
import { PlayersPage } from './Elements/Page/HomePage/main/playersPage/PlayersPage'
import { TeamsPage } from './Elements/Page/HomePage/main/teamsPage/TeamsPage'
import { OneTeamPage } from './Elements/Page/HomePage/oneTeamPage/oneTeamPage'
import LoginPage from './Elements/Page/LoginPage/LoginPage'
import { OnePlayer } from './Elements/Page/OnePlayer/OnePlayer'
import RegisterForm from './Elements/Page/RegisterPage/RegistrationPage'

function App() {
  return (
    <div>
      <div className={styles.appContainer}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="players" element={<PlayersPage />} />
            <Route path="players/:id" element={<OnePlayer />} />
            <Route path="teams" element={<TeamsPage />} />
            <Route path="teams/:id" element={<OneTeamPage />} />
            <Route path="teams/newTeams" element={<AddNewTeams />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="players/addPlayers" element={<AddNewPlayers />} />

            {/*<Route path="*" element={<NotFoundPage />} />*/}
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
