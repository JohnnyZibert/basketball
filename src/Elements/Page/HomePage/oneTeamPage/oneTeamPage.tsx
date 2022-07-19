import React from 'react'
import { Link } from 'react-router-dom'

import styles from './oneTeamPage.modele.scss'

export const OneTeamPage = () => {
  return (
    <div className={styles.oneTeamsContainer}>
      <div className={styles.header}>
        <p>
          <Link to={'teams'}>Teams</Link>
          <span>/</span>ало ало
        </p>
      </div>
      <div>
        <img className={styles.logoTeams} src={''} />
      </div>
      <div></div>
    </div>
  )
}
