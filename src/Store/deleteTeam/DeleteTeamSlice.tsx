import { createSlice } from '@reduxjs/toolkit'

import { IStatus, Status } from '../../types/types'
import { deleteTeamRequest } from './DeleteTeamAsyncAction'

const initialState: IStatus = {
  status: Status.LOADING,
}

const deleteTeamSlice = createSlice({
  name: 'deleteTeamSlice',
  initialState,
  reducers: {},
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

// export const { } = deleteTeamSlice.actions

export default deleteTeamSlice.reducer
