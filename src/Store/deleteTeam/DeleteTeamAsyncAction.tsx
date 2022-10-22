import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { instance } from '../../api/instance'
import { deletePlayer } from '../deletePlayer/deletePlayerSlice'
import { IOneTeam } from '../getOneTeam/getOneTeamsSlice'
import { useAppDispatch } from '../store'
import { deleteTeam } from './DeleteTeamSlice'

export const deleteTeamRequest = createAsyncThunk(
  'deleteTeamSlice/deleteTeamRequest',
  async (id: number) => {
    const response = await instance.delete<IOneTeam>(
      `http://dev.trainee.dex-it.ru/api/Team/Delete?id=${id}`
    )
    return response.data
  }
)
