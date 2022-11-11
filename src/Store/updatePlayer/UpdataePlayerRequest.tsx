import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IPlayer } from '../../types/types'

export const updatePlayerRequest = createAsyncThunk(
  'updatePlayerSlice/updatePlayerRequest',
  async (data: IPlayer) => {
    const response = await instance.put<IPlayer>(
      `http://dev.trainee.dex-it.ru/api/Player/Update`,
      {
        ...data,
        // @ts-ignore
        position: data.position.value,
        // @ts-ignore
        team: +data.team.value,
        number: +data.number,
        height: +data.height,
        weight: +data.weight,
        avatarUrl: data.avatarUrl,
      }
    )
    return response.data
  }
)
