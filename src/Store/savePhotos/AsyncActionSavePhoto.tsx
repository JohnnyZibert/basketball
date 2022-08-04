import { createAsyncThunk } from '@reduxjs/toolkit'
import { UseFormSetValue } from 'react-hook-form'

import { instance } from '../../api/instance'
import { IUserForm } from '../../Elements/Page/HomePage/addNewTeamsPage/AddNewTeamsPage'

export interface IPostPhotosPayload {
  file: FormData
  setValue: UseFormSetValue<IUserForm>
}

export const postPhotosRequest = createAsyncThunk(
  'savePhotos/postPhotosRequest',
  async ({ file, setValue }: IPostPhotosPayload) => {
    const response = await instance.post(
      'http://dev.trainee.dex-it.ru/api/Image/SaveImage',
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return { response, setValue }
  }
)
