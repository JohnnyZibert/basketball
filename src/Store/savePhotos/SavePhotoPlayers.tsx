import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../getTeams/TeamsSlice'
import { postPhotosRequestPlayers } from './AsyncActionSavePhotoPlayers'

export interface IPostPhotoPlayer {
  // photosUploadPlayer: string
  status: Status
}

const initialState: IPostPhotoPlayer = {
  // photosUploadPlayer: ' ',
  status: Status.SUCCESS,
}

const savePhotosPlayers = createSlice({
  name: 'savePhotosPlayers',
  initialState,
  reducers: {
    // addPhotoPlayer(state, action) {
    //   state.photosUploadPlayer =
    //     'http://dev.trainee.dex-it.ru' + action.payload.data
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(postPhotosRequestPlayers.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(postPhotosRequestPlayers.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      // state.photosUploadPlayer =
      //   'http://dev.trainee.dex-it.ru' + action.payload.response.data
      const url = 'http://dev.trainee.dex-it.ru' + action.payload.response.data
      action.payload.setValue('avatarUrl', url)
    })

    builder.addCase(postPhotosRequestPlayers.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const { addPhotoPlayer } = savePhotosPlayers.actions

export default savePhotosPlayers.reducer
