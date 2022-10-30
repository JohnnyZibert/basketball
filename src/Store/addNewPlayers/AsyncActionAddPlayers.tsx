import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestPlayers } from '../../consts/links'
import { IAddPlayersForm } from '../../Elements/Page/HomePage/AddNewPlayersPage/AddNewPlayersPage'

export const addNewPlayersPostRequest = createAsyncThunk(
  'addNewPlayers/addNewPlayersPostRequest',
  async (data: IAddPlayersForm) => {
    const response = await instance.post(requestPlayers.addNewPlayers, {
      ...data,
      // @ts-ignore
      position: data.position.value,
      // @ts-ignore
      team: data.team.value,
      number: +data.number,
      height: +data.height,
      weight: +data.weight,
      avatarUrl: data.avatarUrl,
    })
    return response.data
  }
)
