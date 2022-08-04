import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IPlayersCard } from './getPlayersSlice'

export const getPlayersRequest = createAsyncThunk(
  'players/getPlayersRequest',
  async () => {
    const response = await instance.get<IPlayersCard>(
      `http://dev.trainee.dex-it.ru/api/Player/GetPlayers`
    )
    return response.data
  }
)
