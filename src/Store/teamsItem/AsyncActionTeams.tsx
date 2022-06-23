import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestPlayers } from '../../consts/links'
import { ITeams } from './TeamsSlice'

export const getTeamsRequest = createAsyncThunk(
  'teams/getTeamsRequest',
  async () => {
    const response = await instance.get<ITeams>(requestPlayers.players)
    return response.data
  }
)
