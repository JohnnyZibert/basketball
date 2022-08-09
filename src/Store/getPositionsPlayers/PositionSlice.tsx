import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { getPositionsRequest } from './getPositionRequest'

const initialState = {
  positions: [],
  status: Status.LOADING,
}

const teamsSlice = createSlice({
  name: 'positionsPlayers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPositionsRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getPositionsRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
      state.positions = payload.positions
    })

    builder.addCase(getPositionsRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const { setTeams } = teamsSlice.actions

export default teamsSlice.reducer
