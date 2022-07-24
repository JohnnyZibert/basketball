import axios from 'axios'

import { getToken } from '../Store/requests/authLoginRequest'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiemdpcmRhbiIsInRlbmFudCI6IjI4NTYiLCJuYmYiOjE2NTg2ODQ4NTAsImV4cCI6MTY1ODc3MTI1MCwiaXNzIjoiVGVzdC1CYWNrZW5kLTEiLCJhdWQiOiJCYXNrZXRCYWxsQ2x1YlNhbXBsZSJ9.CpQALtBxak57YZH6TdPk52Qob7i7a244F8fz6pT4mUM'
export const instance = axios.create({
  baseURL,

  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control': 'Allow-Origin',
    Authorization: 'Bearer ' + token,
  },
})
