import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { deleteTeam, editTeamInfo } from '../../../../assets/img/images'
import { deleteTeamRequest } from '../../../../Store/deleteTeam/DeleteTeamAsyncAction'
import { getOneTeamRequest } from '../../../../Store/getOneTeam/getOneTeamRequest'
import { AppDispatch, RootState } from '../../../../Store/store'
import { TablePlayers } from '../../../../UI/TableWithPlayers/TablePlayers'
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
            <div className={styles.editBtn}>{editTeamInfo}</div>
          </Link>
          <div
            className={styles.deleteBtn}
            onClick={() => handleOnClickDeleteTeam(Number(id))}
          >
            {deleteTeam}
          </div>
        </div>
      </div>
      <div className={styles.wrapInfoTeam}>
        {' '}
        <div className={styles.teamInfo}>
          <div className={styles.logoTeams}>
            <img src={imageUrl} />
          </div>
          <div className={styles.descriptionTeam}>
            <div className={styles.nameTeam}>{name}</div>
            <div className={styles.foundation}>
              <div>
                Year of foundation
                <div className={styles.years}>{foundationYear}</div>
              </div>
              <div>
                Division
                <div className={styles.division}>{division}</div>
              </div>
            </div>
            <div>
              Conference
              <div className={styles.conference}>{conference}</div>
            </div>
          </div>
        </div>
      </div>
      <TablePlayers />
    </div>
  )
}
