import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IOneTeam } from '../getOneTeam/getOneTeamsSlice'

export const updateTeamRequest = createAsyncThunk(
  'updateTeamSlice/updateTeamRequest',
  async (teamId: number) => {
    const response = await instance.put<IOneTeam>(
      `http://dev.trainee.dex-it.ru/api/Team/Update?id=${teamId}`
    )
    console.log(response.data)
    return response.data
  }
)
