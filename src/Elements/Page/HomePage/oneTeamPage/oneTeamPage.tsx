import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { deleteIcon, editInfoIcon } from '../../../../assets/img/images'
import { deleteTeamRequest } from '../../../../Store/deleteTeam/DeleteTeamAsyncAction'
import { getOneTeamRequest } from '../../../../Store/getOneTeam/getOneTeamRequest'
import { getPlayersRequest } from '../../../../Store/getPlayers/AsyncGetPlayers'
import { AppDispatch, RootState } from '../../../../Store/store'
import { TablePlayers } from '../../../../UI/TableWithPlayers/TablePlayers'
import { OnePage } from '../OnePage/OnePage'
import styles from './oneTeamPage.module.scss'

export const OneTeamPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()

  const { name, division, imageUrl, foundationYear, conference } = useSelector(
    (state: RootState) => state.oneTeam.data
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (id != null) {
      dispatch(getOneTeamRequest(Number(id)))
    }
  }, [id])

  useEffect(() => {
    dispatch(getPlayersRequest())
  }, [dispatch])

  const handleOnClickDeleteTeam = async (id: number) => {
    await dispatch(deleteTeamRequest(Number(id)))
    await navigate('/teams')
  }

  return (
    <div className={styles.oneTeamsContainer}>
      <div className={styles.header}>
        <div className={styles.headerTeamMenu}>
          <Link to="/">Teams</Link>
          <span> / </span>
          {name}
        </div>
        <div className={styles.editTools}>
          <Link to={'/teams/newTeams'}>
            <div className={styles.editBtn}>{editInfoIcon}</div>
          </Link>
          <div
            className={styles.deleteBtn}
            onClick={() => handleOnClickDeleteTeam(Number(id))}
          >
            {deleteIcon}
          </div>
        </div>
      </div>
      <OnePage
        teamName={name}
        division={division}
        imageUrl={imageUrl}
        foundationYear={foundationYear}
        conference={conference}
      />
      <TablePlayers id={id} />
    </div>
  )
}
