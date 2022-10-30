import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { setLoginAuthRequest } from './authLoginRequest'

export interface AuthState {
  dataProfile: {
    name: string
    avatarUrl: string
    token: string
  }
  status: Status
}

const initialState: AuthState = {
  dataProfile: {
    name: '',
    avatarUrl: '',
    token: '',
  },
  status: Status.LOADING,
}

const authLoginSlice = createSlice({
  name: 'authLoginSlice',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.dataProfile = payload
      localStorage.setItem('name', state.dataProfile.name)
    },
    logoutSuccess: (): AuthState => initialState,
    logout() {
      localStorage.clear()
      window.location.href = '/login'
    },
  },

  extraReducers: (builder) => {
    builder.addCase(setLoginAuthRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(setLoginAuthRequest.fulfilled, (state = initialState) => {
      state.status = Status.SUCCESS
    })
    builder.addCase(setLoginAuthRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export const { loginSuccess, logoutSuccess } = authLoginSlice.actions
export default authLoginSlice.reducer
