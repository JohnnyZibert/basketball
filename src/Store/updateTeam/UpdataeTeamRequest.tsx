import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { IUserForm } from '../../Elements/Page/HomePage/AddNewTeamsPage/AddNewTeamsPage'
import { IOneTeam } from '../getOneTeam/getOneTeamsSlice'

export const updateTeamRequest = createAsyncThunk(
  'updateTeamSlice/updateTeamRequest',
  async (data: IUserForm) => {
    const response = await instance.put<IOneTeam>(
      `http://dev.trainee.dex-it.ru/api/Team/Update`,
      data
    )
    return response.data
  }
)
