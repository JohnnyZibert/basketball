import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { setLoginAuthRequest } from './authLoginRequest'

export interface AuthState {
  dataProfile: {
    name: string | null
    avatarUrl: string | null
    token: string | null
  }
  isLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  dataProfile: {
    name: null,
    avatarUrl: null,
    token: null,
  },
  isLoading: false,
  error: null,
}

const authLoginSlice = createSlice({
  name: 'authLoginSlice',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      state.dataProfile = payload
    },
    logoutSuccess: (): AuthState => initialState,
    logout() {
      localStorage.clear()
      window.location.href = '/login'
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
  //   setUserData(state = initialState, action) {
  //     state.profileData = action.payload
  //     // state.isAuth = !!action.payload
  //   },
  //   removeUser(state) {
  //     state.profileData.name = null
  //     state.profileData.avatarUrl = null
  //     state.authData.token = null
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(setLoginAuthRequest.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(setLoginAuthRequest.fulfilled, (state = initialState) => {
      state.isLoading = false
    })
    builder.addCase(setLoginAuthRequest.rejected, (state) => {
      state.isLoading = true
    })
  },
})

export const { loginSuccess, logoutSuccess, loginFailure } =
  authLoginSlice.actions
export default authLoginSlice.reducer
