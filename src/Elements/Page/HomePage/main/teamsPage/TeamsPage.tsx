import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '../../../../../Store/store'
import { getTeamsRequest } from '../../../../../Store/teamsItem/AsyncActionTeams'
import styles from './TeamsLabel.module.scss'

export const TeamsPage = React.memo(() => {
  const dispatch = useAppDispatch()
  const { data, count, page, size } = useSelector(
    (state: RootState) => state.getTeams.teams
  )

  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [dispatch])

  return (
    <>
      <ul className={styles.cartTeamsBox}>
        {data.map((item) => (
          <li key={item.id} className={styles.teamsCard}>
            <div className={styles.teamsCardTop}>
              <img className={styles.logoTeams} src={item.imageUrl} />
            </div>
            <div className={styles.teamsCardBottom}>
              {item.name} <br />
              <span>Year of foundation:{item.foundationYear}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
})
