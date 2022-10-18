import React from 'react'
import { Link } from 'react-router-dom'

import { SignOutButton } from '../../../../UI/Button/SignOutButton/SignOutButton'
import styles from './SideBarHome.module.scss'

export const SideBarHome = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <nav className={styles.sideBarSection}>
        <div className={styles.sideBarItem}>
          <Link to="teams">
            <div className={styles.sideBarTeams}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9899 8C10.9899 9.66 9.65992 11 7.99992 11C6.33992 11 4.99992 9.66 4.99992 8C4.99992 6.34 6.33992 5 7.99992 5C9.65992 5 10.9899 6.34 10.9899 8ZM18.99 8C18.99 9.66 17.66 11 16 11C14.34 11 13 9.66 13 8C13 6.34 14.34 5 16 5C17.66 5 18.99 6.34 18.99 8ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM15.0301 13.05C15.3801 13.02 15.7101 13 16.0001 13C18.3301 13 23.0001 14.17 23.0001 16.5V18C23.0001 18.55 22.5501 19 22.0001 19H16.8201C16.9301 18.69 17.0001 18.35 17.0001 18V16.5C17.0001 15.03 16.2101 13.92 15.0701 13.09C15.0671 13.0869 15.064 13.083 15.0607 13.0787C15.0531 13.0688 15.044 13.0569 15.0301 13.05Z"
                  fill="#9C9C9C"
                />
              </svg>
              <div>Teams</div>
            </div>
          </Link>
          <Link to="players">
            <div className={styles.sideBarPlayers}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9999 8C15.9999 10.21 14.2099 12 11.9999 12C9.78992 12 7.99992 10.21 7.99992 8C7.99992 5.79 9.78992 4 11.9999 4C14.2099 4 15.9999 5.79 15.9999 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V18Z"
                  fill="#9C9C9C"
                />
              </svg>
              <div>Players</div>
            </div>
          </Link>
        </div>
      </nav>
      <div className={styles.signOutBlockSidebar}>
        <SignOutButton />
      </div>
    </div>
  )
}
