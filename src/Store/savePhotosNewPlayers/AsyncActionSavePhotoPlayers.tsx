import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'

export interface postPhotosRequestPlayers {
  file: FormData
  setValue: (url: string) => void
}

export const postPhotosRequestPlayersRequest = createAsyncThunk(
  'postPhotosRequestPlayersRequest',
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
    await setValue(`${'http://dev.trainee.dex-it.ru' + response.data}`)
    return { response, setValue }
  }
)
