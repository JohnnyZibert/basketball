import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { deletePlayerRequest } from './AsyncDeletePlayer'

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
  status: Status.SUCCESS,
}

const deletePlayerSlice = createSlice({
  name: 'deletePlayerSlice',
  initialState,
  reducers: {
    deletePlayer(state = initialState, { payload }) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deletePlayerRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(deletePlayerRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(deletePlayerRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { deletePlayer } = deletePlayerSlice.actions

export default deletePlayerSlice.reducer
