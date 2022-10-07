import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { setOnePlayer } from './getOnePlayerSlice'

export const getOnePlayerRequest = createAsyncThunk(
  'getOnePlayer/getOnePlayerRequest',
  async (id: number, { dispatch }) => {
    const response = await instance.get(
      `http://dev.trainee.dex-it.ru/api/Player/Get?id=${id}`
    )
    return dispatch(setOnePlayer(response.data))
  }
)
