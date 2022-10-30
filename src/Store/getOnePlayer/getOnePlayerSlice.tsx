import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { getOnePlayerRequest } from './getOnePlayerRequest'

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

const getOnePlayerSlice = createSlice({
  name: 'getOnePlayer',
  initialState,
  reducers: {
    setOnePlayer(state = initialState, { payload }) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOnePlayerRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getOnePlayerRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(getOnePlayerRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { setOnePlayer } = getOnePlayerSlice.actions

export default getOnePlayerSlice.reducer
