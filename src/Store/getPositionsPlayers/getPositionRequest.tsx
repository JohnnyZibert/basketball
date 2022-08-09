import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'

export interface IGetPositionRequest {
  positions: []
}

export const getPositionsRequest = createAsyncThunk(
  'positionsPlayers/getPositionsRequest',
  async () => {
    const response = await instance.get<IGetPositionRequest>(
      `http://dev.trainee.dex-it.ru/api/Player/GetPositions`
    )
    console.log(response.data)
    return response.data
  }
)
