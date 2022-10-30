import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { updatePlayerRequest } from './UpdataePlayerRequest'

export interface IOnePlayerData {
  data: IPlayer
  status: Status
}
export interface IPlayer {
  name: string
  number: number | string
  position: string
  team: number
  birthday: string
  height: number | string
  weight: number | string
  avatarUrl: string
  id: number
}
const initialState: IOnePlayerData = {
  data: {
    name: '',
    number: 0,
    position: '',
    team: 0,
    birthday: '2022-10-11T13:52:59.386Z',
    height: 0,
    weight: 0,
    avatarUrl: '',
    id: 0,
  },
  status: Status.LOADING,
}

const updatePlayerSlice = createSlice({
  name: 'updatePlayerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePlayerRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(updatePlayerRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(updatePlayerRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default updatePlayerSlice.reducer
