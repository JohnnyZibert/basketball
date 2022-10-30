import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { getPlayersRequest } from './AsyncGetPlayers'
export interface IPlayers {
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

export interface IPlayersCard {
  data: IPlayers[]
  count: number
  page: number
  size: number
}

export interface IPlayersSlice {
  players: IPlayersCard
  status: Status
}

const initialState: IPlayersSlice = {
  players: {
    data: [],
    page: 0,
    count: 0,
    size: 6,
  },
  status: Status.LOADING,
}

const getPlayersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setCurrentPagePlayers: (state, { payload }: PayloadAction<number>) => {
      state.players.page = payload
    },
    setCurrentPageSize: (state, { payload }: PayloadAction<number>) => {
      state.players.size = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlayersRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getPlayersRequest.fulfilled, (state, { payload }) => {
      state.players = payload
      state.status = Status.SUCCESS
    })

    builder.addCase(getPlayersRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { setCurrentPagePlayers, setCurrentPageSize } =
  getPlayersSlice.actions

export default getPlayersSlice.reducer
