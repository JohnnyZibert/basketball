import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { deleteTeamRequest } from './DeleteTeamAsyncAction'

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

const initialState: IOneTeam = {
  data: {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: '',
    id: 0,
  },
  status: Status.SUCCESS,
}

const deleteTeamSlice = createSlice({
  name: 'deleteTeamSlice',
  initialState,
  reducers: {
    deleteTeam(state = initialState, { payload }) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteTeamRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(deleteTeamRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(deleteTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { deleteTeam } = deleteTeamSlice.actions

export default deleteTeamSlice.reducer
