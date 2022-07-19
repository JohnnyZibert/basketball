import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { postPhotosRequestPlayers } from './AsyncActionSavePhotoPlayers'

export interface IPostPhoto {
  photosUpload: string
  status: Status
}

const initialState: IPostPhoto = {
  photosUpload: ' ',
  status: Status.SUCCESS,
}

const savePhotosPlayers = createSlice({
  name: 'savePhotosPlayers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postPhotosRequestPlayers.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(
      postPhotosRequestPlayers.fulfilled,
      (state, { payload }) => {
        state.status = Status.SUCCESS
        const urlPhotoPlayers =
          'http://dev.trainee.dex-it.ru' + payload.response.data
        payload.setValue('avatarUrl', urlPhotoPlayers)
      }
    )

    builder.addCase(postPhotosRequestPlayers.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const {  } = teamsSlice.actions

export default savePhotosPlayers.reducer
