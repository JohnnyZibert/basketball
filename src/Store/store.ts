import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import getOneTeamReducer from './getOneTeam/getOneTeamsSlice'
import teamsReducer from './getTeams/TeamsSlice'
import photosPlayersUrlReducer from './savePhotos/SavePhotoPlayers'
import photosTeamsUrlReducer from './savePhotos/SavePhotoSlice'
import authLoginReducer from './slices/authLoginSlice'
import { auth } from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth,
    authLogin: authLoginReducer,
    getTeams: teamsReducer,
    photosTeamsUrl: photosTeamsUrlReducer,
    photosPlayersUrl: photosPlayersUrlReducer,
    oneTeam: getOneTeamReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
