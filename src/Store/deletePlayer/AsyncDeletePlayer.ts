import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IPlayer } from './deletePlayerSlice'

export const deletePlayerRequest = createAsyncThunk(
  'deletePlayerSlice/deletePlayerRequest',
  async (id: number) => {
    const response = await instance.delete<IPlayer>(
      `http://dev.trainee.dex-it.ru/api/Player/Delete?id=${id}`
    )
    return response.data
  }
)
