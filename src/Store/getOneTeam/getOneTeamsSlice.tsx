import { createSlice } from '@reduxjs/toolkit'

import { IOneTeam, Status } from '../../types/types'
import { getOneTeamRequest } from './getOneTeamRequest'

const initialState: IOneTeam = {
  data: {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: '',
    id: 0,
  },
  status: Status.LOADING,
}

const getOneTeamSlice = createSlice({
  name: 'getOneTeam',
  initialState,
  reducers: {
    setOneTeam(state = initialState, { payload }) {
      state.data = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOneTeamRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getOneTeamRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(getOneTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { setOneTeam } = getOneTeamSlice.actions

export default getOneTeamSlice.reducer
