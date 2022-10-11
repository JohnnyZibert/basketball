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
import styles from './oneTeamPage.module.scss'

export const OneTeamPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()
  const { name, division, imageUrl, foundationYear, conference } = useSelector(
    (state: RootState) => state.oneTeam.data
  )
  const players = useSelector((state: RootState) => state.getPlayers.players)
  console.log(players)

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
    await navigate('/')
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
          <Link to={'addNewTeams'}>
            <div className={styles.editBtn}>{deleteIcon}</div>
          </Link>
          <div
            className={styles.deleteBtn}
            onClick={() => handleOnClickDeleteTeam(Number(id))}
          >
            {editInfoIcon}
          </div>
        </div>
      </div>
      <div className={styles.wrapInfoTeam}>
        {' '}
        <div className={styles.teamInfo}>
          <div className={styles.logoTeams}>
            <img src={imageUrl} className={styles.imgTeam} />
          </div>
          <div className={styles.descriptionTeam}>
            <div className={styles.nameTeam}>{name}</div>
            <div className={styles.foundation}>
              <div className={styles.label}>
                Year of foundation
                <div className={styles.teamData}>{foundationYear}</div>
              </div>
              <div className={styles.label}>
                Division
                <div className={styles.teamData}>{division}</div>
              </div>
            </div>
            <div className={styles.label}>
              Conference
              <div className={styles.teamData}>{conference}</div>
            </div>
          </div>
        </div>
      </div>
      <TablePlayers />
    </div>
  )
}
