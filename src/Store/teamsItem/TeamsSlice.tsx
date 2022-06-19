import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getTeamsRequest } from './AsyncActionTeams'

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ITeams {
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
  teams: ITeams
  status: Status
}

const initialState: ITeamsSlice = {
  teams: {
    data: [],
    page: 1,
    count: 0,
    size: 0,
  },
  status: Status.LOADING,
}

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeamsRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getTeamsRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
      state.teams = payload.data
    })

    builder.addCase(getTeamsRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const { setTeams } = teamsSlice.actions

export default teamsSlice.reducer
