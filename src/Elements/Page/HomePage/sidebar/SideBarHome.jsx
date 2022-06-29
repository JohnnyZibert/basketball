import { Link } from 'react-router-dom'

import { Basic } from '../playersPage/uploadInput'
import styles from './SideBarHome.module.scss'

export const SideBarHome = () => {
  const onClickSignOut = () => {
    onClickSignOut()
  }

  return (
    <>
      <div className={styles.sideBar}>
        <nav className={styles.sideBarSection}>
          <div className={styles.sideBarItem}>
            <Link to="home/teams" activeClassName={styles.activeLink}>
              <div className={styles.sideBarTeams}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9899 8C10.9899 9.66 9.65992 11 7.99992 11C6.33992 11 4.99992 9.66 4.99992 8C4.99992 6.34 6.33992 5 7.99992 5C9.65992 5 10.9899 6.34 10.9899 8ZM18.99 8C18.99 9.66 17.66 11 16 11C14.34 11 13 9.66 13 8C13 6.34 14.34 5 16 5C17.66 5 18.99 6.34 18.99 8ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM15.0301 13.05C15.3801 13.02 15.7101 13 16.0001 13C18.3301 13 23.0001 14.17 23.0001 16.5V18C23.0001 18.55 22.5501 19 22.0001 19H16.8201C16.9301 18.69 17.0001 18.35 17.0001 18V16.5C17.0001 15.03 16.2101 13.92 15.0701 13.09C15.0671 13.0869 15.064 13.083 15.0607 13.0787C15.0531 13.0688 15.044 13.0569 15.0301 13.05Z"
                    fill="#9C9C9C"
                  />
                </svg>
                <div>Teams</div>
              </div>
            </Link>
            <Link to={'/home/players'}>
              <div className={styles.sideBarPlayers}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9999 8C15.9999 10.21 14.2099 12 11.9999 12C9.78992 12 7.99992 10.21 7.99992 8C7.99992 5.79 9.78992 4 11.9999 4C14.2099 4 15.9999 5.79 15.9999 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V18Z"
                    fill="#9C9C9C"
                  />
                </svg>
                <div>Players</div>
              </div>
            </Link>
          </div>
          <div className={styles.signOutBlock}>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 0.0100098H20C21.1 0.0100098 22 0.91001 22 2.01001V15.99C22 17.09 21.1 17.99 20 17.99H1.98C0.89 17.99 0 17.1 0 16.01V13C0 12.45 0.45 12 1 12C1.55 12 2 12.45 2 13V15.02C2 15.57 2.45 16.02 3 16.02H19C19.55 16.02 20 15.57 20 15.02V2.99001C20 2.44001 19.55 1.99001 19 1.99001H3C2.45 1.99001 2 2.44001 2 2.99001V5.00001C2 5.55001 1.55 6.00001 1 6.00001C0.45 6.00001 0 5.55001 0 5.00001V2.01001C0 0.91001 0.9 0.0100098 2 0.0100098ZM13.64 9.36005L10.85 12.1501C10.54 12.4601 10 12.2401 10 11.7901V10.0001H1C0.45 10.0001 0 9.55005 0 9.00005C0 8.45005 0.45 8.00005 1 8.00005H10V6.21005C10 5.76005 10.54 5.54005 10.85 5.86005L13.64 8.65005C13.84 8.85005 13.84 9.16005 13.64 9.36005Z"
                fill="#FF768E"
              />
            </svg>
            <span className={styles.btnSignOut}>Sign Out</span>
          </div>
        </nav>
        <Basic />
      </div>
    </>
  )
}
