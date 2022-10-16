import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { deleteIcon, editInfoIcon } from '../../../assets/img/images'
import { deletePlayerRequest } from '../../../Store/deletePlayer/AsyncDeletePlayer'
import { deletePlayer } from '../../../Store/deletePlayer/deletePlayerSlice'
import { getOnePlayerRequest } from '../../../Store/getOnePlayer/getOnePlayerRequest'
import { playersSelector } from '../../../Store/getPlayers/getPlayersSlice'
import { getTeamsRequest } from '../../../Store/getTeams/AsyncActionTeams'
import { AppDispatch, RootState } from '../../../Store/store'
import { getAge } from '../../../utils/utils'
import styles from './onePlayer.module.scss'

export const OnePlayer = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  const { name, number, avatarUrl, position, birthday, height, weight, team } =
    useSelector((state: RootState) => state.getOnePlayer.data)

  const { id } = useParams()
  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [dispatch])
  const data = useSelector(playersSelector)

  useEffect(() => {
    if (id != null) {
      dispatch(getOnePlayerRequest(Number(id)))
    }
  }, [id])

  const handleOnClickDeletePlayer = async (id: number) => {
    await dispatch(deletePlayerRequest(Number(id)))
    await navigate('/players')
  }

  return (
    <div className={styles.onePlayerContainer}>
      <div className={styles.headerPlayer}>
        <div className={styles.headerPlayerMenu}>
          <Link to="/">Player</Link>
          <span> / </span>
          {name}
        </div>
        <div className={styles.editTools}>
          <Link to={'/players/addPlayers'}>
            <div
              className={styles.editBtn}
              onClick={() => navigate('/players/addPlayers')}
            >
              {editInfoIcon}
            </div>
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
            <div className={styles.namePlayer}>
              {name} <span>#{number}</span>
            </div>
            <div className={styles.currentPlayerInfo}>
              <div className={styles.rightBlockInfo}>
                <div className={styles.label}>
                  Position
                  <div className={styles.bodyInfo}>{position}</div>
                </div>
                <div className={styles.label}>
                  Height
                  <div className={styles.bodyInfo}>{height} cm</div>
                </div>
                <div className={styles.label}>
                  Age
                  <div className={styles.bodyInfo}>{getAge(birthday)}</div>
                </div>
              </div>
              <div>
                <div className={styles.label}>
                  Team
                  <div className={styles.bodyInfo}>
                    {data.find((team) => team.id === Number(id))?.teamName}
                  </div>
                </div>
                <div>
                  <div className={styles.label}>
                    Weight
                    <div className={styles.bodyInfo}>{weight} kg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
