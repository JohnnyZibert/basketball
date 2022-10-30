import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

import deleteTeamReducer from './deleteTeam/DeleteTeamSlice'
import getOnePlayerReducer from './getOnePlayer/getOnePlayerSlice'
import getOneTeamReducer from './getOneTeam/getOneTeamsSlice'
import getPlayersReducer from './getPlayers/getPlayersSlice'
import positionsPlayers from './getPositionsPlayers/PositionSlice'
import teamsReducer from './getTeams/TeamsSlice'
import authLoginReducer from './loginRequest/authLoginSlice'
import authRegisterReducer from './registerRequest/authSlice'
import photosTeamsUrlReducer from './savePhotoNewTeams/SavePhotoSlice'
import photosPlayersUrlReducer from './savePhotosNewPlayers/SavePhotoPlayers'
import searchReducer from './search/Search'

export const store = configureStore({
  reducer: {
    authRegister: authRegisterReducer,
    authLogin: authLoginReducer,
    getTeams: teamsReducer,
    photosTeamsUrl: photosTeamsUrlReducer,
    photosPlayersUrl: photosPlayersUrlReducer,
    oneTeam: getOneTeamReducer,
    deleteTeam: deleteTeamReducer,
    search: searchReducer,
    getPlayers: getPlayersReducer,
    positions: positionsPlayers,
    getOnePlayer: getOnePlayerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...(process.env.NODE_ENV !== 'production' ? [logger] : [])
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
