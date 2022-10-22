import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IPlayersCard } from './getPlayersSlice'

export const getPlayersRequest = createAsyncThunk(
  'players/getPlayersRequest',
  async ({ page, size }: Partial<Pick<IPlayersCard, 'size' | 'page'>>) => {
    const response = await instance.get(
      `http://dev.trainee.dex-it.ru/api/Player/GetPlayers?page=${page}&PageSize=${size}`
    )
    return response.data
  }
)
