import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestPlayers } from '../../consts/links'
import { IAddPlayersForm } from '../../Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'

export const addNewPlayersPostRequest = createAsyncThunk(
  'addNewPlayers/addNewPlayersPostRequest',
  async (data: IAddPlayersForm) => {
    const response = await instance.post(requestPlayers.addNewPlayers, data)
    return response.data
  }
)
