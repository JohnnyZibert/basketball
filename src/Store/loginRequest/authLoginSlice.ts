import { createSlice } from '@reduxjs/toolkit'

import { AuthState, Status } from '../../types/types'
import { setLoginAuthRequest } from './authLoginRequest'

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
