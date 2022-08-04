import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPlayersRequest } from '../../../../../Store/getPlayers/AsyncGetPlayers'
import { RootState, useAppDispatch } from '../../../../../Store/store'
import styles from './PlayersLabel.module.scss'

export const PlayersPage = () => {
  const dispatch = useAppDispatch()
  const { data } = useSelector((state: RootState) => state.getPlayers.players)

  useEffect(() => {
    dispatch(getPlayersRequest())
  }, [])

  return (
    <div className={styles.cardContainer}>
      <ul className={styles.cartTeamsBox}>
        {data.map((item) => (
          <Link
            key={item.id}
            className={styles.teamsCard}
            to={`players/${item.id}`}
          >
            <div className={styles.teamsCardTop}>
              <img
                className={styles.logoTeams}
                src={item.avatarUrl}
                alt={'logoPlayers'}
              />
            </div>
            <div className={styles.teamsCardBottom}>
              {item.newPlayer} <br />
              <span>Year of foundation:{item.position}</span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}
