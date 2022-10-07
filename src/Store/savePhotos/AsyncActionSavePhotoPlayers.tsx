import { createAsyncThunk } from '@reduxjs/toolkit'
import { UseFormSetValue } from 'react-hook-form'

import { instance } from '../../api/instance'
import { IAddPlayersForm } from '../../Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'

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
    console.log(`${'http://dev.trainee.dex-it.ru' + response.data}`)
    await setValue(`${'http://dev.trainee.dex-it.ru' + response.data}`)
    return { response, setValue }
  }
)
