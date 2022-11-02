import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../../types/types'
import { addNewTeamsPostRequest } from './AddNewTeamsRequest'

const initialState = {
  status: Status.LOADING,
}

const addNewTeamsSlice = createSlice({
  name: 'addNewTeams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewTeamsPostRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(addNewTeamsPostRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(addNewTeamsPostRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default addNewTeamsSlice.reducer
