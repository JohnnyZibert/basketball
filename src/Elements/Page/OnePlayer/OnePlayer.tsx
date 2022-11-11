import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { deletePlayerRequest } from '../../../Store/deletePlayer/AsyncDeletePlayer'
import { getOnePlayerRequest } from '../../../Store/getOnePlayer/getOnePlayerRequest'
import { selectOnePlayer } from '../../../Store/getOnePlayer/Selectors'
import { playersSelector } from '../../../Store/getPlayers/Selectors'
import { getTeamsRequest } from '../../../Store/getTeams/AsyncActionTeams'
import { AppDispatch } from '../../../Store/store'
import { OneItemCardHeader } from '../../../UI/OneItemCardHeader/OneItemCardHeader'
import { OnePage } from '../OnePage/OnePage'
import styles from './onePlayer.module.scss'

export const OnePlayer: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const data = useSelector(playersSelector)
  const { data: playerInfo } = useSelector(selectOnePlayer)

  const { id } = useParams()
  useEffect(() => {
    dispatch(getTeamsRequest({}))
  }, [dispatch])

  useEffect(() => {
    if (id != null) {
      dispatch(getOnePlayerRequest(Number(id)))
    }
  }, [dispatch, id])

  const handleOnClickDeletePlayer = async () => {
    await dispatch(deletePlayerRequest(Number(id)))
    await navigate('/players')
  }
  const teamName = data.find((team) => team.id === Number(id))?.teamName

  return (
    <>
      <div className={styles.headerContainer}>
        <OneItemCardHeader
          name={playerInfo.name}
          id={id}
          handleOnClickDeleteItem={handleOnClickDeletePlayer}
          pageName={'Players'}
        />

        <OnePage
          playerName={playerInfo.name}
          number={playerInfo.number}
          position={playerInfo.position}
          avatarUrl={playerInfo.avatarUrl}
          birthday={playerInfo.birthday}
          height={playerInfo.height}
          weight={playerInfo.weight}
          teamNameForPlayer={teamName}
        />
      </div>
    </>
  )
}
