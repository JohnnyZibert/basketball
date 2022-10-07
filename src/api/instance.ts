import axios from 'axios'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useAuth } from '../hooks/use-auth'
import { getToken } from '../Store/requests/authLoginRequest'
import { RootState } from '../Store/store'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiemdpcmRhbiIsInRlbmFudCI6IjI4NTYiLCJuYmYiOjE2NjQ4NzEzOTcsImV4cCI6MTY2NDk1Nzc5NywiaXNzIjoiVGVzdC1CYWNrZW5kLTEiLCJhdWQiOiJCYXNrZXRCYWxsQ2x1YlNhbXBsZSJ9.cZoNKehdO-dtx4SQdka_Jtt5ftPbhADAo6zquKjQSeg'

export const instance = axios.create({
  baseURL,

  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control': 'Allow-Origin',
    Authorization: 'Bearer ' + token,
  },
})
