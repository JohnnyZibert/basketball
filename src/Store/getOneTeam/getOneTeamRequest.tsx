import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestGetTeams } from '../../consts/links'

export const getOneTeamRequest = createAsyncThunk(
  'getOneTeam/getOneTeamRequest',
  async (id: string) => {
    const response = await instance.get(requestGetTeams.getOneTeam + id)
    return response.data
  }
)
