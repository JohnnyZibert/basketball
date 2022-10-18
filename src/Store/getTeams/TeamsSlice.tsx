import { createSlice } from '@reduxjs/toolkit'

import { getTeamsRequest } from './AsyncActionTeams'

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface ITeam {
  name: string
  foundationYear: number
  division: string
  conference: string
  imageUrl: string
  id: number
}

export interface ITeamsCard {
  data: ITeam[]
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
    page: 0,
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
      state.teams.page = payload.page
      state.teams.count = payload.count
      state.teams.size = payload.size
      console.log(payload.size)
    })

    builder.addCase(getTeamsRequest.rejected, (state) => {
      state.status = 'error'
    })
  },
})

// export const { setTeams } = teamsSlice.actions

export default teamsSlice.reducer
