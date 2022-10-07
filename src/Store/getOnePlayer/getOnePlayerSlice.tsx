import { createSlice } from '@reduxjs/toolkit'

import { IPlayersCard, IPlayersSlice } from '../getPlayers/getPlayersSlice'
import { Status } from '../getTeams/TeamsSlice'
import { getOnePlayerRequest } from './getOnePlayerRequest'

export interface IOnePlayerData {
  data: {
    name: string
    number: number
    position: string
    team: number
    birthday: string
    height: number
    weight: number
    avatarUrl: string
    id: number
  }
  status: Status
}

const initialState: IOnePlayerData = {
  data: {
    name: '',
    number: 0,
    position: '',
    team: 0,
    birthday: '',
    height: 0,
    weight: 0,
    avatarUrl: '',
    id: 0,
  },
  status: Status.SUCCESS,
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
