import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestPlayers, requestTeams } from '../../consts/links'
import { ITeams } from './TeamsSlice'

export const getTeamsRequest = createAsyncThunk(
  'teams/getTeamsRequest',
  async () => {
    return await instance.get<ITeams>(requestPlayers.players)
  }
)
