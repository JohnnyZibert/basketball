import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestLinks } from '../../consts/links'
import { IAuthForm } from '../../Elements/Page/RegisterPage/RegistrationPage'
import { loginSuccess } from './authLoginSlice'

export const setLoginAuthRequest = createAsyncThunk(
  'authLoginSlice/setLoginAuthRequest',
  async (
    { data, action }: { data: IAuthForm; action: () => void },
    { dispatch }
  ) => {
    const response = await instance.post(requestLinks.authLogin, data)
    await dispatch(loginSuccess(response.data))
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    await action()
  }
)

export const getToken = () => {
  const token = localStorage.getItem('token')
  return token ?? ''
}
