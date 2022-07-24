import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { updateTeamRequest } from './UpdataeTeamRequest'

export interface IOneTeam {
  data: {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
    id: number
  }
  status: Status
}

const initialState = {
  teamData: {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: '',
    id: 0,
  },
  status: Status.SUCCESS,
}

const updateTeamSlice = createSlice({
  name: 'updateTeamSlice',
  initialState,
  reducers: {
    updateTeam(state = initialState, { payload }) {
      state.teamData = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateTeamRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(updateTeamRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(updateTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { updateTeam } = updateTeamSlice.actions

export default updateTeamSlice.reducer
