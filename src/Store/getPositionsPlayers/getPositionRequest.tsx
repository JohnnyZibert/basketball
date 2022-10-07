import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'

export const getPositionsRequest = createAsyncThunk(
  'positionsPlayers/getPositionsRequest',
  async () => {
    const response = await instance.get(
      `http://dev.trainee.dex-it.ru/api/Player/GetPositions`
    )
    return response.data
  }
)
