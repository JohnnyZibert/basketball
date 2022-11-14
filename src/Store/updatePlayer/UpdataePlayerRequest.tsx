import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IOption, IPlayer } from '../../types/types'

export const updatePlayerRequest = createAsyncThunk(
  'updatePlayerSlice/updatePlayerRequest',
  async (
    data: Omit<IPlayer, 'position' | 'team'> & {
      position: IOption
      team: IOption
    }
  ) => {
    const response = await instance.put(
      `http://dev.trainee.dex-it.ru/api/Player/Update`,
      {
        ...data,
        position: data.position.value,
        team: Number(data?.team?.value || 0),
        number: +data.number,
        height: +data.height,
        weight: +data.weight,
        avatarUrl: data.avatarUrl,
      }
    )
    return response.data
  }
)
