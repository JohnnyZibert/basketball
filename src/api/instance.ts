import axios from 'axios'

import { getToken } from '../Store/requests/authLoginRequest'

export const baseURL = 'http://dev.trainee.dex-it.ru/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMTIzNDUiLCJ0ZW5hbnQiOiIxMTAxIiwibmJmIjoxNjU1NzU0ODQwLCJleHAiOjE2NTU4NDEyNDAsImlzcyI6IlRlc3QtQmFja2VuZC0xIiwiYXVkIjoiQmFza2V0QmFsbENsdWJTYW1wbGUifQ.7o54qpOKnlHfoOWsndCOXOWiNr_KS59EDhjx-he18ps'

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TOKEN,
  },
})
