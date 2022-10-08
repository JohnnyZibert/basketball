import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestLinks } from '../../consts/links'
import { IAuthForm } from '../../Elements/Page/RegisterPage/RegistrationPage'

export const setRegistrationAuthRequest = createAsyncThunk(
  'authSlice/setRegistrationAuthRequest',
  async (data: IAuthForm) => {
    const { repeatPassword, ...rest } = data
    const response = await instance.post(requestLinks.auth, rest)
    return response
  }
)
