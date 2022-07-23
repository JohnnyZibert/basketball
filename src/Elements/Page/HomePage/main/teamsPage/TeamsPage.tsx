import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getOneTeamRequest } from '../../../../../Store/getOneTeam/getOneTeamRequest'
import { getTeamsRequest } from '../../../../../Store/getTeams/AsyncActionTeams'
import { RootState, useAppDispatch } from '../../../../../Store/store'
import styles from './TeamsPage.module.scss'

export const TeamsPage = React.memo(() => {
  const dispatch = useAppDispatch()
  const { data, count, page, size } = useSelector(
    (state: RootState) => state.getTeams.teams
  )
  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [])

  // const handleOnClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
  //   const id = e.currentTarget.id
  //   dispatch(getOneTeamRequest(id))
  // }

  return (
    <div className={styles.cardContainer}>
      <ul className={styles.cartTeamsBox}>
        {data.map((item) => (
          <Link
            key={item.id}
            className={styles.teamsCard}
            to={`teams/${item.id}`}
          >
            {/*<Link to={`/oneTeam`}>*/}
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
          // </Link>
        ))}
      </ul>
    </div>
  )
})
