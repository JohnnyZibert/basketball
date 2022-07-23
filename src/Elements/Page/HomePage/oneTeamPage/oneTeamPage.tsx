import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { getOneTeamRequest } from '../../../../Store/getOneTeam/getOneTeamRequest'
import { IOneTeam } from '../../../../Store/getOneTeam/getOneTeamsSlice'
import { AppDispatch, RootState } from '../../../../Store/store'
import styles from './oneTeamPage.module.scss'

export const OneTeamPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()
  const { name, division, imageUrl, foundationYear, conference } = useSelector(
    (state: RootState) => state.oneTeam.teamData
  )

  useEffect(() => {
    if (id != null) {
      dispatch(getOneTeamRequest(Number(id)))
    }
  }, [id])

  console.log(useParams())
  return (
    <div className={styles.oneTeamsContainer}>
      <div className={styles.header}>
        <p>
          <Link to={'teams'}>Teams</Link>
          <span> / </span>
          {name}
        </p>
      </div>
      <div className={styles.teamInfo}>
        <div className={styles.logoTeams}>
          <img src={imageUrl} />
        </div>
        <div>
          <div>{name}</div>
          <div>{foundationYear}</div>
          <div>{conference}</div>
          <div>{division}</div>
        </div>
      </div>
      <div className={styles.schedule}>Player list with params</div>
    </div>
  )
}
