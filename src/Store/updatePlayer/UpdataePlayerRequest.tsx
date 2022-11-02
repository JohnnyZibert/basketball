import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IPlayer, IUserForm } from '../../types/types'

export const updatePlayerRequest = createAsyncThunk(
  'updatePlayerSlice/updatePlayerRequest',
  async (data: IUserForm) => {
    const response = await instance.put<IPlayer>(
      `http://dev.trainee.dex-it.ru/api/Player/Update`,
      data
    )
    return response.data
  }
)
