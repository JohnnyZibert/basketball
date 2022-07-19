import axios from 'axios'

import { getToken } from '../Store/requests/authLoginRequest'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTIzNDUiLCJ0ZW5hbnQiOiIxMTAxIiwibmJmIjoxNjU4MTczMzI5LCJleHAiOjE2NTgyNTk3MjksImlzcyI6IlRlc3QtQmFja2VuZC0xIiwiYXVkIjoiQmFza2V0QmFsbENsdWJTYW1wbGUifQ.TP_q8h0zPF56tHJ39frIHMr6itnt8HVzjMNTwrhhrnE'
export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'Access-Control': 'Allow-Origin',
    Authorization: 'Bearer ' + token,
  },
})
