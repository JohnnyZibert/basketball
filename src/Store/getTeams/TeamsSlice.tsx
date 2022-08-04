import { createSlice } from '@reduxjs/toolkit'

import { getTeamsRequest } from './AsyncActionTeams'

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ITeamsCard {
  data: {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
    id: number
  }[]
  count: number
  page: number
  size: number
}

export interface ITeamsSlice {
  teams: ITeamsCard
  status: string | null
}

const initialState: ITeamsSlice = {
  teams: {
    data: [],
    page: 1,
    count: 0,
    size: 0,
  },
  status: null,
}

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeamsRequest.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getTeamsRequest.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.teams.data = payload.data
    })

    builder.addCase(getTeamsRequest.rejected, (state) => {
      state.status = 'error'
    })
  },
})

// export const { setTeams } = teamsSlice.actions

export default teamsSlice.reducer
