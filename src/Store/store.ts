import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import photosTeamsUrlReducer from './savePhotos/SavePhotoSlice'
import authLoginReducer from './slices/authLoginSlice'
import { auth } from './slices/authSlice'
import teamsReducer from './teamsItem/TeamsSlice'

export const store = configureStore({
  reducer: {
    auth,
    authLogin: authLoginReducer,
    getTeams: teamsReducer,
    photosTeamsUrl: photosTeamsUrlReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
