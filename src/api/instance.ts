import axios from 'axios'

import { getToken } from '../Store/requests/authLoginRequest'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiemdpcmRhbiIsInRlbmFudCI6IjI4NTYiLCJuYmYiOjE2NTUxMzYwMTgsImV4cCI6MTY1NTIyMjQxOCwiaXNzIjoiVGVzdC1CYWNrZW5kLTEiLCJhdWQiOiJCYXNrZXRCYWxsQ2x1YlNhbXBsZSJ9.v0O6brBCUgyTFeSpPnZa1EKEJHRZ52OgsY6qH5nZsIk'

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TOKEN,
  },
})
