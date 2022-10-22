import { createSelector, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'
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
  status: string | null
}

const initialState: IPlayersSlice = {
  players: {
    data: [],
    page: 0,
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

const state = (store: RootState) => store

export const playersSelector = createSelector(
  state,
  ({ getTeams, getPlayers }) => {
    const playersTeam = getPlayers.players.data.map((player) => {
      return {
        ...player,
        teamName:
          getTeams.teams.data.find((team) => team.id === player.team)?.name ||
          '',
      }
    })
    return playersTeam
  }
)
