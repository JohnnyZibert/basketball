import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestGetTeams } from '../../consts/links'
import { ITeamsCard } from './TeamsSlice'

export const getTeamsRequest = createAsyncThunk(
  'teams/getTeamsRequest',
  async () => {
    const response = await instance.get<ITeamsCard>(requestGetTeams.getTeams)
    return response.data
  }
)
