import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { addNewPlayersPostRequest } from './AsyncActionAddPlayers'

const initialState = {
  status: Status.SUCCESS,
}

const addNewPlayersSlice = createSlice({
  name: 'addNewPlayers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewPlayersPostRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(
      addNewPlayersPostRequest.fulfilled,
      (state, { payload }) => {
        state.status = Status.SUCCESS
      }
    )

    builder.addCase(addNewPlayersPostRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const {  } = addNewTeamsSlice.actions

export default addNewPlayersSlice.reducer
