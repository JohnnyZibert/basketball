import { createSlice } from '@reduxjs/toolkit'

import { IPostPhoto, Status } from '../../types/types'
import { savePhotosTeamRequest } from './AsyncActionSavePhoto'

const initialState: IPostPhoto = {
  photosUpload: ' ',
  status: Status.LOADING,
}

const savePhotosTeamSlice = createSlice({
  name: 'savePhotosTeam',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(savePhotosTeamRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(savePhotosTeamRequest.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
      const url = 'http://dev.trainee.dex-it.ru' + payload.response.data
      payload.setValue('imageUrl', url)
    })

    builder.addCase(savePhotosTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

export default savePhotosTeamSlice.reducer
