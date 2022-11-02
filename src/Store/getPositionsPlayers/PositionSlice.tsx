import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../../types/types'
import { getPositionsRequest } from './getPositionRequest'

interface IPositionPlayers {
  positions: string[]
  status: Status
}

const initialState: IPositionPlayers = {
  positions: [],
  status: Status.LOADING,
}

const positionsPlayers = createSlice({
  name: 'positionsPlayers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPositionsRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getPositionsRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
      state.positions = payload
    })

    builder.addCase(getPositionsRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const { setTeams } = teamsSlice.actions

export default positionsPlayers.reducer
