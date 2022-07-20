import axios from 'axios'

import { getToken } from '../Store/requests/authLoginRequest'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiemdpcmRhbiIsInRlbmFudCI6IjI4NTYiLCJuYmYiOjE2NTgyNjAyMjUsImV4cCI6MTY1ODM0NjYyNSwiaXNzIjoiVGVzdC1CYWNrZW5kLTEiLCJhdWQiOiJCYXNrZXRCYWxsQ2x1YlNhbXBsZSJ9.4RRc1BYF87PCCs8EKVQig1PsNmHF7lh5zLjXQUp-BFI'
export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control': 'Allow-Origin',
    Authorization: 'Bearer ' + token,
  },
})
