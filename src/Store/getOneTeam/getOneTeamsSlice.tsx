import { createSlice } from '@reduxjs/toolkit'

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

const getOneTeam = createSlice({
  name: 'getOneTeam',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneTeamRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getOneTeamRequest.fulfilled, (state, { payload }) => {
      state.data = payload.data
      state.status = Status.SUCCESS
    })

    builder.addCase(getOneTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const {  } = getOneTeam.actions

export default getOneTeam.reducer
