import { createAsyncThunk } from '@reduxjs/toolkit'

import { instance } from '../../api/instance'
import { requestLinks } from '../../consts/links'
import { IAuthForm } from '../../Elements/Page/RegisterPage/RegistrationPage'
import { loginFailure, loginSuccess } from './authLoginSlice'

export const setLoginAuthRequest = createAsyncThunk(
  'authLoginSlice/setLoginAuthRequest',
  async (
    { data, action }: { data: IAuthForm; action: () => void },
    { dispatch }
  ) => {
    try {
      const response = await instance.post(requestLinks.authLogin, data)
      await dispatch(loginSuccess(response.data))
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.name)
      }
      await action()
    } catch (e: any) {
      console.error(e)
      dispatch(loginFailure(e.message))
    }

    // }
  }
)

export const getToken = () => {
  const token = localStorage.getItem('token')
  return token ?? ''
}
