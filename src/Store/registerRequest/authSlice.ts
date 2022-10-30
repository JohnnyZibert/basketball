import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { setRegistrationAuthRequest } from './authRequests'

interface IRegister {
  status: Status
}

const initialState: IRegister = {
  status: Status.LOADING,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setRegistrationAuthRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(setRegistrationAuthRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })
    builder.addCase(setRegistrationAuthRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default authSlice.reducer
