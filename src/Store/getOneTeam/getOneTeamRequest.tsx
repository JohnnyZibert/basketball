import { createAsyncThunk } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'

import { instance } from '../../api/instance'
import { IOneTeam, setOneTeam } from './getOneTeamsSlice'

export const getOneTeamRequest = createAsyncThunk(
  'getOneTeam/getOneTeamRequest',
  async (id: number, { dispatch }) => {
    const response = await instance.get<IOneTeam>(
      `http://dev.trainee.dex-it.ru/api/Team/Get?id=${id}`
    )
    return dispatch(setOneTeam(response.data))
  }
)
