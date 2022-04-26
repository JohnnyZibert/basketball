import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { instance } from '../../api/instance'
import { requestLinks } from '../../consts/links'
import { IAuthForm } from '../../Elements/Page/RegisterPage/RegistrationPage'
import { setUserData } from '../slices/authLoginSlice'

export const setLoginAuthRequest = createAsyncThunk(
  'AuthLoginSlice/setLoginAuthRequest',
  async (userData: IAuthForm) => {
    const response = await instance.post(requestLinks.authLogin, userData)
    const dispatch = useDispatch()
    if (response.data.statusCode === 200) {
      const { login, password, isAuth } = response.data
      dispatch(setUserData(login, password, isAuth))
    }
  }
)
