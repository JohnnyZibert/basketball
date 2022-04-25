import { createSlice } from '@reduxjs/toolkit'

import { setRegistrationAuthRequest } from '../requests/authRequests'

const initialState = {
  authStatus: false,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setRegistrationAuthRequest.pending, (state) => {
      state.authStatus = true
    })
    builder.addCase(
      setRegistrationAuthRequest.fulfilled,
      (state, { payload }) => {
        state.authStatus = false
      }
    )
    builder.addCase(setRegistrationAuthRequest.rejected, (state) => {
      state.authStatus = false
    })
  },
})

// export const {  } = authSlice.actions;
export const auth = authSlice.reducer
