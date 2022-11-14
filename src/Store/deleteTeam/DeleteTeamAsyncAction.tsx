import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { ITeam } from '../../types/types'

export const deleteTeamRequest = createAsyncThunk(
  'deleteTeamSlice/deleteTeamRequest',
  async (id: number) => {
    const response = await instance.delete<ITeam>(
      `http://dev.trainee.dex-it.ru/api/Team/Delete?id=${id}`
    )
    return response.data
  }
)
