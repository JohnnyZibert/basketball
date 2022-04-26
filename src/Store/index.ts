import { configureStore } from '@reduxjs/toolkit'

import authLoginReducer from './slices/authLoginSlice'
import { auth } from './slices/authSlice'

export default configureStore({
  reducer: {
    auth,
    authLoginReducer,
  },
})
