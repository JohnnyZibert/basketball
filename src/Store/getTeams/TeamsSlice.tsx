import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    size: 6,
  },
  status: null,
}

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setCurrentPageTeams: (state, { payload }: PayloadAction<number>) => {
      state.teams.page = payload
    },
    setCountItem: (state, { payload }: PayloadAction<number>) => {
      state.teams.size = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTeamsRequest.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getTeamsRequest.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.teams = payload
    })

    builder.addCase(getTeamsRequest.rejected, (state) => {
      state.status = 'error'
    })
  },
})

export const { setCurrentPageTeams, setCountItem } = teamsSlice.actions

export default teamsSlice.reducer
