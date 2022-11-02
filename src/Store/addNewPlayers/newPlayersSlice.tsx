import { createSlice } from '@reduxjs/toolkit'

import { IStatus, Status } from '../../types/types'
import { addNewPlayersPostRequest } from './AsyncActionAddPlayers'

const initialState: IStatus = {
  status: Status.LOADING,
}

const addNewPlayersSlice = createSlice({
  name: 'addNewPlayers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewPlayersPostRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(addNewPlayersPostRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(addNewPlayersPostRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const {  } = addNewTeamsSlice.actions

export default addNewPlayersSlice.reducer
