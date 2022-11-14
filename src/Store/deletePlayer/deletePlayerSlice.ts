import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IOnePlayerData, IPlayer, Status } from '../../types/types'
import { deletePlayerRequest } from './AsyncDeletePlayer'

const initialState: IOnePlayerData = {
  data: {
    name: '',
    number: 0,
    position: '',
    team: 0,
    birthday: null,
    height: 0,
    weight: 0,
    avatarUrl: '',
    id: 0,
  },
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
    builder.addCase(
      deletePlayerRequest.fulfilled,
      (state, { payload }: PayloadAction<IPlayer>) => {
        state.status = Status.SUCCESS
        state.data = payload
      }
    )

    builder.addCase(deletePlayerRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default deletePlayerSlice.reducer
