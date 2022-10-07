import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { ISearchParams } from '../../Elements/Page/HomePage/main/search/Search'
import { ITeamsCard } from './TeamsSlice'

export const getTeamsRequest = createAsyncThunk<ITeamsCard>(
  'teams/getTeamsRequest',
  async () => {
    const response = await instance.get<ITeamsCard>(
      `http://dev.trainee.dex-it.ru/api/Team/GetTeams`
    )
    return response.data
  }
)
