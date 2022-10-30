import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestAddTeams } from '../../consts/links'
import { IUserForm } from '../../Elements/Page/HomePage/AddNewTeamsPage/AddNewTeamsPage'

export const addNewTeamsPostRequest = createAsyncThunk(
  'addNewTeams/addNewTeamsPostRequest',
  async (data: IUserForm) => {
    const response = await instance.post(requestAddTeams.addTeams, data)
    return response.data
  }
)
