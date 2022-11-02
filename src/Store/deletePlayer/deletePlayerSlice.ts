import { createSlice } from '@reduxjs/toolkit'

import { IStatus, Status } from '../../types/types'
import { deletePlayerRequest } from './AsyncDeletePlayer'

const initialState: IStatus = {
  status: Status.LOADING,
}

const deletePlayerSlice = createSlice({
  name: 'deletePlayerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deletePlayerRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(deletePlayerRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(deletePlayerRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default deletePlayerSlice.reducer
