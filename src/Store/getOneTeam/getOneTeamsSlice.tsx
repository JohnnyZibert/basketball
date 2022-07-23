import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { getOneTeamRequest } from './getOneTeamRequest'

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

const getOneTeamSlice = createSlice({
  name: 'getOneTeam',
  initialState,
  reducers: {
    setOneTeam(state = initialState, { payload }) {
      state.teamData = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOneTeamRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getOneTeamRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(getOneTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { setOneTeam } = getOneTeamSlice.actions

export default getOneTeamSlice.reducer
