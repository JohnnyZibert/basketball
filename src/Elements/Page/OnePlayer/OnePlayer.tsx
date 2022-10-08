import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { deleteIcon, editInfoIcon } from '../../../assets/img/images'
import { getOnePlayerRequest } from '../../../Store/getOnePlayer/getOnePlayerRequest'
import { AppDispatch, RootState } from '../../../Store/store'
import { TablePlayers } from '../../../UI/TableWithPlayers/TablePlayers'
import styles from '../HomePage/oneTeamPage/oneTeamPage.module.scss'

export const OnePlayer = () => {
  const navigate = useNavigate()
  const { name, number, avatarUrl, position, birthday } = useSelector(
    (state: RootState) => state.getOnePlayer.data
  )

  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id != null) {
      dispatch(getOnePlayerRequest(Number(id)))
    }
  }, [id])

  const handleOnClickDeletePlayer = async (id: number) => {
    await dispatch(getOnePlayerRequest(Number(id)))
    await navigate('/')
  }

  return (
    <div className={styles.oneTeamsContainer}>
      <div className={styles.header}>
        <div className={styles.headerPlayerMenu}>
          <Link to="/">Player</Link>
          <span> / </span>
          {}
        </div>
        <div className={styles.editTools}>
          <Link to={'addNewPlayer'}>
            <div className={styles.editBtn}>{editInfoIcon}</div>
          </Link>
          <div
            className={styles.deleteBtn}
            onClick={() => handleOnClickDeletePlayer(Number(id))}
          >
            {deleteIcon}
          </div>
        </div>
      </div>
      <div className={styles.wrapInfoPlayer}>
        {' '}
        <div className={styles.playerInfo}>
          <div className={styles.logoPlayers}>
            <img src={avatarUrl} alt={'player'} />
          </div>
          <div className={styles.descriptionPlayer}>
            <div className={styles.nameTeam}>{name}</div>
            <div className={styles.foundation}>
              <div>
                Year of foundation
                <div className={styles.years}>{birthday}</div>
              </div>
              <div>
                Division
                <div className={styles.division}>{position}</div>
              </div>
            </div>
            <div>
              Conference
              <div className={styles.conference}>{number}</div>
            </div>
          </div>
        </div>
      </div>
      <TablePlayers />
    </div>
  )
}