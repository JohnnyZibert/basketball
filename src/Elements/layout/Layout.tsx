import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Page/HomePage/header/Header'
import { SideBarHome } from '../Page/HomePage/sidebar/SideBarHome'
import styles from './Layout.module.scss'
export const Layout = () => {
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
