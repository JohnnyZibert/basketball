import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { getTeamsRequest } from '../../Store/getTeams/AsyncActionTeams'
import { getToken } from '../../Store/LoginRequest/authLoginRequest'
import { useAppDispatch } from '../../Store/store'
import { Header } from '../Page/HomePage/header/Header'
import { SideBarHome } from '../Page/HomePage/sidebar/SideBarHome'
import styles from './Layout.module.scss'
export const Layout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [dispatch])

  useEffect(() => {
    const token = getToken()

    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <>
      <header className={styles.headerContainer}>
        <Header />
      </header>
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
