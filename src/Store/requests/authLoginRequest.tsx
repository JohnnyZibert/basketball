import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestLinks } from '../../consts/links'
import { IAuthForm } from '../../Elements/Page/RegisterPage/RegistrationPage'
import { setUserData } from '../slices/authLoginSlice'

export const setLoginAuthRequest = createAsyncThunk(
  'authLoginSlice/setLoginAuthRequest',
  async (data: IAuthForm, { dispatch }) => {
    const response = await instance.post(requestLinks.authLogin, data)
    await dispatch(setUserData(response.data))
    await localStorage.setItem('token', response.data.token)
  }
)

export const getToken = () => {
  return localStorage.getItem('token')
}
