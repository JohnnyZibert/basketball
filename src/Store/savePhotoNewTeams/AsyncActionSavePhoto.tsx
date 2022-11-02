import { createAsyncThunk } from '@reduxjs/toolkit'
import { UseFormSetValue } from 'react-hook-form'

import { instance } from '../../api/instance'
import { IUserForm } from '../../types/types'

export interface IPostPhotosPayload {
  file: FormData
  setValue: UseFormSetValue<IUserForm>
}

export const savePhotosTeamRequest = createAsyncThunk(
  'savePhotosTeam/savePhotosTeamRequest',
  async ({ file, setValue }: IPostPhotosPayload) => {
    const response = await instance.post<string>(
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
