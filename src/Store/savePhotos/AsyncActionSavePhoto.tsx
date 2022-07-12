import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { UseFormSetValue } from 'react-hook-form'

import { instance } from '../../api/instance'
import { requestPhotos } from '../../consts/links'
import { IUserForm } from '../../Elements/Page/HomePage/addNewTeamsBlock/uploadInput'

export interface IPostPhotosPayload {
  file: FormData
  setValue: UseFormSetValue<IUserForm>
}

export const postPhotosRequest = createAsyncThunk(
  'savePhotos/postPhotosRequest',
  async ({ file, setValue }: IPostPhotosPayload) => {
    const response = await instance.post<any>(
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
