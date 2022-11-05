import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { getTeamsRequest } from '../../Store/getTeams/AsyncActionTeams'
import { getToken } from '../../Store/loginRequest/authLoginRequest'
import { useAppDispatch } from '../../Store/store'
import { BurgerMenu } from '../Page/BurgerMenu/BurgerMenu'
import { Header } from '../Page/Header/Header'
import { SideBarHome } from '../Page/Sidebar/SideBarHome'
import styles from './Layout.module.scss'

export const Layout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [visibleMenu, setVisibleMenu] = useState(false)

  useEffect(() => {
    dispatch(getTeamsRequest({}))
  }, [])

  useEffect(() => {
    const token = getToken()

    if (!token) {
      navigate('/login')
    }
  }, [navigate])

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
