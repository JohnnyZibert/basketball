import axios from 'axios'

import { getToken } from '../Store/loginRequest/authLoginRequest'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'

export const instance = axios.create({
  baseURL,

  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control': 'Allow-Origin',
  },
})

instance.interceptors.request.use(async (config) => {
  const token = getToken()
  config.headers = {
    ...config.headers,
    ...(token ? { Authorization: 'Bearer ' + token } : {}),
  }
  return config
})
