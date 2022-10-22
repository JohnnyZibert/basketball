import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { ITeamsCard } from './TeamsSlice'

export const getTeamsRequest = createAsyncThunk(
  'teams/getTeamsRequest',
  async ({ data }: { data: ITeamsCard }) => {
    const { count, page, size } = data
    const response = await instance.get(
      `http://dev.trainee.dex-it.ru/api/Team/GetTeams?Page=${page}&PageSize=${size}`
    )
    return response.data
  }
)
