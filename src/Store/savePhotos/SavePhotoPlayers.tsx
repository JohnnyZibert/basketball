import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { savePhotosTeamRequest } from './AsyncActionSavePhoto'
import {
  postPhotosRequestPlayers,
  postPhotosRequestPlayersRequest,
} from './AsyncActionSavePhotoPlayers'

export interface IPostPhoto {
  photosUpload: string
  status: Status
}

const initialState: IPostPhoto = {
  photosUpload: ' ',
  status: Status.SUCCESS,
}

const savePhotosPlayersSlice = createSlice({
  name: 'savePhotosPlayers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postPhotosRequestPlayersRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(
      postPhotosRequestPlayersRequest.fulfilled,
      (state, { payload }) => {
        state.status = Status.SUCCESS
        const url = 'http://dev.trainee.dex-it.ru' + payload.response.data
        // payload.setValue('avatarUrl', url)
      }
    )

    builder.addCase(postPhotosRequestPlayersRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const {  } = teamsSlice.actions

export default savePhotosPlayersSlice.reducer
