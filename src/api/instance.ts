import axios from 'axios'

import { getToken } from '../Store/requests/authLoginRequest'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiemdpcmRhbiIsInRlbmFudCI6IjI4NTYiLCJuYmYiOjE2NTk2MzgxMjgsImV4cCI6MTY1OTcyNDUyOCwiaXNzIjoiVGVzdC1CYWNrZW5kLTEiLCJhdWQiOiJCYXNrZXRCYWxsQ2x1YlNhbXBsZSJ9.jlQJ78rOXeq8BEg66NuyssL53Q3eqGj7SruPlaQ2OjY'
export const instance = axios.create({
  baseURL,

  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control': 'Allow-Origin',
    Authorization: 'Bearer ' + token,
  },
})
