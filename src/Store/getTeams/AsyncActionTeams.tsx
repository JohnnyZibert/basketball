import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { ITeamsCard } from '../../types/types'

export const getTeamsRequest = createAsyncThunk(
  'teams/getTeamsRequest',
  async ({ page, size }: Partial<Pick<ITeamsCard, 'size' | 'page'>>) => {
    const response = await instance.get(
      `http://dev.trainee.dex-it.ru/api/Team/GetTeams?Page=${page}&PageSize=${size}`
    )
    return response.data
    // return response.data as ITeamsCard['page'] вытаскивает только 1 параметр из интерфейса
  }
)
