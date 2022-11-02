import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { deleteTeamRequest } from '../../../Store/deleteTeam/DeleteTeamAsyncAction'
import { getOneTeamRequest } from '../../../Store/getOneTeam/getOneTeamRequest'
import { selectOneTeam } from '../../../Store/getOneTeam/Selectors'
import { getPlayersRequest } from '../../../Store/getPlayers/AsyncGetPlayers'
import { AppDispatch } from '../../../Store/store'
import { OneItemCardHeader } from '../../../UI/OneItemCardHeader/OneItemCardHeader'
import { TablePlayers } from '../../../UI/TableWithPlayers/TablePlayers'
import { OnePage } from '../OnePage/OnePage'
import styles from './OneTeamPage.module.scss'

export const OneTeamPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const { teamData } = useSelector(selectOneTeam)

  useEffect(() => {
    if (id != null) {
      dispatch(getOneTeamRequest(Number(id)))
    }
  }, [dispatch, id])

  useEffect(() => {
    dispatch(getPlayersRequest({}))
  }, [dispatch])

  const handleOnClickDeleteTeam = async () => {
    await dispatch(deleteTeamRequest(Number(id)))
    await navigate('/teams')
  }

  return (
    <div className={styles.headerContainer}>
      <OneItemCardHeader
        name={teamData.name}
        id={id}
        handleOnClickDeleteItem={handleOnClickDeleteTeam}
        pageName={'Teams'}
      />
      <OnePage
        teamName={teamData.name}
        division={teamData.division}
        imageUrl={teamData.imageUrl}
        foundationYear={teamData.foundationYear}
        conference={teamData.conference}
      />
      <TablePlayers id={id} />
    </div>
  )
}
