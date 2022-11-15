import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import { getTeamsRequest } from '../../Store/getTeams/AsyncActionTeams'
import { selectGetTeams } from '../../Store/getTeams/Selectors'
import { getToken } from '../../Store/loginRequest/authLoginRequest'
import { useAppDispatch } from '../../Store/store'
import { BurgerMenu } from '../Page/BurgerMenu/BurgerMenu'
import { Header } from '../Page/Header/Header'
import { SideBarHome } from '../Page/Sidebar/SideBarHome'
import styles from './Layout.module.scss'

export const Layout = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const teamData = useSelector(selectGetTeams)

  useEffect(() => {
    const token = getToken()

    if (!token) {
      navigate('login')
    }
  }, [])

  const [visibleMenu, setVisibleMenu] = useState(false)
  console.log(teamData.teams.size)
  useEffect(() => {
    teamData.teams.size && dispatch(getTeamsRequest({}))
  }, [])

  return (
    <>
      <header className={styles.headerContainer}>
        <Header setVisibleMenu={setVisibleMenu} visibleMenu={visibleMenu} />
      </header>
      <div className={styles.burgerMenu}>{visibleMenu && <BurgerMenu />}</div>
      <div className={styles.container}>
        <aside className={styles.asideContainer}>
          <SideBarHome />
        </aside>
        <main className={styles.mainContainer}>
          <Outlet />
        </main>
      </div>
    </>
  )
}
