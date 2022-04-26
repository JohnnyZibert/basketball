import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import authLoginReducer from './slices/authLoginSlice'
import { auth } from './slices/authSlice'

const reducers = combineReducers({ auth, authLoginReducer })
export type RootStateType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware1) =>
    getDefaultMiddleware1({
      serializableCheck: false,
    }),
})
