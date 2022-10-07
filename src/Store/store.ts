import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import deleteTeamReducer from './deleteTeam/DeleteTeamSlice'
import getOnePlayerReducer from './getOnePlayer/getOnePlayerSlice'
import getOneTeamReducer from './getOneTeam/getOneTeamsSlice'
import getPlayersReducer from './getPlayers/getPlayersSlice'
import positionsPlayers from './getPositionsPlayers/PositionSlice'
import teamsReducer from './getTeams/TeamsSlice'
import photosPlayersUrlReducer from './savePhotos/SavePhotoPlayers'
import photosTeamsUrlReducer from './savePhotos/SavePhotoSlice'
import searchReducer from './search/Search'
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
    deleteTeam: deleteTeamReducer,
    search: searchReducer,
    getPlayers: getPlayersReducer,
    positions: positionsPlayers,
    getOnePlayer: getOnePlayerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
