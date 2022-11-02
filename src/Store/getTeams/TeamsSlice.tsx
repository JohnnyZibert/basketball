import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITeamsSlice, Status } from '../../types/types'
import { getTeamsRequest } from './AsyncActionTeams'

const initialState: ITeamsSlice = {
  teams: {
    data: [],
    page: 0,
    count: 0,
    size: 6,
  },
  status: Status.LOADING,
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
      state.status = Status.LOADING
    })
    builder.addCase(getTeamsRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
      state.teams = payload
    })

    builder.addCase(getTeamsRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { setCurrentPageTeams, setCountItem } = teamsSlice.actions

export default teamsSlice.reducer
