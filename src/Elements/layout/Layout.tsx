import React, { MouseEvent, useRef, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../../hooks/use-auth'
import { Header } from '../Page/HomePage/header/Header'
import { SideBarHome } from '../Page/HomePage/sidebar/SideBarHome'
import LoginPage from '../Page/LoginPage/LoginPage'
import RegisterForm from '../Page/RegisterPage/RegistrationPage'
import styles from './Layout.module.scss'
export const Layout = () => {
  const { isAuth, name, token } = useAuth()

  return token ? (
    <>
      {/*<RegisterForm />*/}
      {/*<LoginPage />*/}
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
  ) : (
    <Navigate to={'login'} />
  )
}
