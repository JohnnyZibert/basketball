import React from 'react'

import LoginPage from '../LoginPage/LoginPage'
import { Header } from './header/Header'
import styles from './HomePage.module.scss'
import { SideBarHome } from './sidebar/SideBarHome'

export const HomePage = () => {
  return (
    <div className={styles.contentContainer}>
      <SideBarHome />
    </div>
  )
}
