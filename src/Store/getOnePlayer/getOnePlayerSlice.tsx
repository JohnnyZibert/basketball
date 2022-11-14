import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

import { IOnePlayerData, Status } from '../../types/types'
import { getOnePlayerRequest } from './getOnePlayerRequest'

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

const getOnePlayerSlice = createSlice({
  name: 'getOnePlayer',
  initialState,
  reducers: {
    setOnePlayer: (state = initialState, { payload }) => {
      state.data = {
        ...payload,
        birthday: moment(payload.birthday).format('yyyy-MM-D'),
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOnePlayerRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(getOnePlayerRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(getOnePlayerRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { setOnePlayer } = getOnePlayerSlice.actions

export default getOnePlayerSlice.reducer
