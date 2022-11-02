import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../../types/types'
import { postPhotosRequestPlayersRequest } from './AsyncActionSavePhotoPlayers'

interface IPostPhoto {
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
    builder.addCase(postPhotosRequestPlayersRequest.fulfilled, (state) => {
      state.status = Status.SUCCESS
    })

    builder.addCase(postPhotosRequestPlayersRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default savePhotosPlayersSlice.reducer
