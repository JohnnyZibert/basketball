import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTeamsRequest } from '../../../../../Store/getTeams/AsyncActionTeams'
import { RootState, useAppDispatch } from '../../../../../Store/store'
import styles from './TeamsPage.module.scss'

export const TeamsPage = () => {
  const dispatch = useAppDispatch()
  const { data } = useSelector((state: RootState) => state.getTeams.teams)

  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [])

  return (
    <div className={styles.cardContainer}>
      <ul className={styles.cartTeamsBox}>
        {data.map((item) => (
          <Link
            key={item.id}
            className={styles.teamsCard}
            to={`teams/${item.id}`}
          >
            <div className={styles.teamsCardTop}>
              <img
                className={styles.logoTeams}
                src={item.imageUrl}
                alt={'logoTeam'}
              />
            </div>
            <div className={styles.teamsCardBottom}>
              {item.name} <br />
              <span>Year of foundation:{item.foundationYear}</span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}
