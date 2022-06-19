import { createSlice } from '@reduxjs/toolkit'

import { getToken, setLoginAuthRequest } from '../requests/authLoginRequest'

export interface IUserData {
  name: string
  avatarUrl: string | null
  token: string
}

const initialState = {
  userData: {
    name: '',
    avatarUrl: null,
    token: '',
  },
  isAuth: false,
}

const authLoginSlice = createSlice({
  name: 'authLoginSlice',
  initialState,
  reducers: {
    setUserData(state = initialState, action) {
      state.userData = action.payload
      state.isAuth = !!action.payload
    },
    onClickSignOut(state) {
      state.isAuth = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLoginAuthRequest.pending, (state) => {
      state.isAuth = true
    })
    builder.addCase(setLoginAuthRequest.fulfilled, (state = initialState) => {
      state.isAuth = !!getToken()
    })
    builder.addCase(setLoginAuthRequest.rejected, (state) => {
      state.isAuth = false
    })
  },
})

export const { setUserData, onClickSignOut } = authLoginSlice.actions
export default authLoginSlice.reducer
