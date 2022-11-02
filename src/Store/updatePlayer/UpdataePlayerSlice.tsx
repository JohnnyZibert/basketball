import { createSlice } from '@reduxjs/toolkit'

import { IOnePlayerData, Status } from '../../types/types'
import { updatePlayerRequest } from './UpdataePlayerRequest'

const initialState: IOnePlayerData = {
  data: {
    name: '',
    number: 0,
    position: '',
    team: 0,
    birthday: '2022-10-11T13:52:59.386Z',
    height: 0,
    weight: 0,
    avatarUrl: '',
    id: 0,
  },
  status: Status.LOADING,
}

const updatePlayerSlice = createSlice({
  name: 'updatePlayerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePlayerRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(updatePlayerRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(updatePlayerRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default updatePlayerSlice.reducer
