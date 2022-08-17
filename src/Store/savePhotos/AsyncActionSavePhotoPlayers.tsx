import { createAsyncThunk } from '@reduxjs/toolkit'
import { UseFormSetValue } from 'react-hook-form'

import { instance } from '../../api/instance'
import { IAddPlayersForm } from '../../Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
import { IPostPhotosPayload } from './AsyncActionSavePhoto'

export interface postPhotosRequestPlayers {
  file: FormData
  setValue: UseFormSetValue<IAddPlayersForm>
}

export const postPhotosRequestPlayers = createAsyncThunk(
  'savePhotosPlayers/postPhotosRequestPlayers',
  async ({ file, setValue }: postPhotosRequestPlayers) => {
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
