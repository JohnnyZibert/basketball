import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IOneTeam, ITeam, ITeamData, IUserForm } from '../../types/types'

export const updateTeamRequest = createAsyncThunk(
  'updateTeamSlice/updateTeamRequest',
  async (data: ITeam) => {
    const response = await instance.put<IOneTeam>(
      `http://dev.trainee.dex-it.ru/api/Team/Update/`,
      data
    )
    return response.data
  }
)
