import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, createStore } from 'redux'

import { auth } from './slices/authSlice'

const reducers = combineReducers({ auth })
export type RootStateType = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware1) =>
    getDefaultMiddleware1({
      serializableCheck: false,
    }),
})
