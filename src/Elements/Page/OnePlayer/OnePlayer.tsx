import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { deletePlayerRequest } from '../../../Store/deletePlayer/AsyncDeletePlayer'
import { getOnePlayerRequest } from '../../../Store/getOnePlayer/getOnePlayerRequest'
import { selectOnePlayer } from '../../../Store/getOnePlayer/Selectors'
import { playersSelector } from '../../../Store/getPlayers/Selectors'
import { getTeamsRequest } from '../../../Store/getTeams/AsyncActionTeams'
import { selectGetTeams } from '../../../Store/getTeams/Selectors'
import { AppDispatch } from '../../../Store/store'
import { OneItemCardHeader } from '../../../UI/OneItemCardHeader/OneItemCardHeader'
import { OnePage } from '../OnePage/OnePage'
import styles from './onePlayer.module.scss'

export const OnePlayer: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const data = useSelector(playersSelector)
  const playerInfo = useSelector(selectOnePlayer)
  const { teams } = useSelector(selectGetTeams)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getTeamsRequest({ page: teams.page, size: teams.size }))
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
          nameAdd={playerInfo.data.name}
          id={id}
          handleOnClickDeleteItem={handleOnClickDeletePlayer}
          pageName={'Players'}
        />

        <OnePage
          playerName={playerInfo.data.name}
          number={playerInfo.data.number}
          position={playerInfo.data.position}
          avatarUrl={playerInfo.data.avatarUrl}
          birthday={playerInfo.data.birthday}
          height={playerInfo.data.height}
          weight={playerInfo.data.weight}
          teamNameForPlayer={teamName}
        />
      </div>
    </>
  )
}
