import { createSlice } from '@reduxjs/toolkit'

import { Status } from '../teamsItem/TeamsSlice'
import { postPhotosRequest } from './AsyncActionSavePhoto'

export interface IPostPhoto {
  photosUpload: string
  status: Status
}

const initialState: IPostPhoto = {
  photosUpload: ' ',
  status: Status.SUCCESS,
}

const savePhotos = createSlice({
  name: 'savePhotos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postPhotosRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(postPhotosRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
      const url = 'http://dev.trainee.dex-it.ru' + payload.response.data
      payload.setValue('imageUrl', url)
    })

    builder.addCase(postPhotosRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const {  } = teamsSlice.actions

export default savePhotos.reducer
