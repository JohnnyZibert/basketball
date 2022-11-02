import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IPlayer } from '../../types/types'

export const deletePlayerRequest = createAsyncThunk(
  'deletePlayerSlice/deletePlayerRequest',
  async (id: number) => {
    const response = await instance.delete<IPlayer>(
      `http://dev.trainee.dex-it.ru/api/Player/Delete?id=${id}`
    )
    return response.data
  }
)
