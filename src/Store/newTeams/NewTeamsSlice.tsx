import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { addNewTeamsPostRequest } from './AddNewTeamsRequest'

const initialState = {
  status: Status.SUCCESS,
}

const addNewTeamsSlice = createSlice({
  name: 'addNewTeams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewTeamsPostRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(addNewTeamsPostRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(addNewTeamsPostRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const {  } = addNewTeamsSlice.actions

export default addNewTeamsSlice.reducer
