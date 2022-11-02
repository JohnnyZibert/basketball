import { createSlice } from '@reduxjs/toolkit'

import { IOneTeam, Status } from '../../types/types'
import { updateTeamRequest } from './UpdataeTeamRequest'

const initialState: IOneTeam = {
  teamData: {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: '',
    id: 0,
  },
  status: Status.LOADING,
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
    builder.addCase(updateTeamRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(updateTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default updateTeamSlice.reducer
