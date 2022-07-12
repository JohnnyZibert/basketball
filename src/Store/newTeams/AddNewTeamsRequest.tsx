import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { UseFormSetValue } from 'react-hook-form'

import { instance } from '../../api/instance'
import { requestAddTeams } from '../../consts/links'
import { IUserForm } from '../../Elements/Page/HomePage/addNewTeamsBlock/uploadInput'

export const addNewTeamsPostRequest = createAsyncThunk(
  'addNewTeams/addNewTeamsPostRequest',
  async (data: IUserForm) => {
    const response = await instance.post(requestAddTeams.addTeams, data)
    return response.data
  }
)
