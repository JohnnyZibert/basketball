import { createSlice } from '@reduxjs/toolkit'

import { getPlayersRequest } from './AsyncGetPlayers'

export interface IPlayersCard {
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
  }[]
  count: number
  page: number
  size: number
}

export interface IPlayersSlice {
  players: IPlayersCard
  status: string | null
}

const initialState: IPlayersSlice = {
  players: {
    data: [],
    page: 1,
    count: 0,
    size: 0,
  },
  status: null,
}

const getPlayersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlayersRequest.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getPlayersRequest.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.players.data = payload.data
    })

    builder.addCase(getPlayersRequest.rejected, (state) => {
      state.status = 'error'
    })
  },
})

// export const { setTeams } = getPlayersSlice.actions

export default getPlayersSlice.reducer
