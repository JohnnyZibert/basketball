import axios from 'axios'
export const baseURL = 'http://dev.trainee.dex-it.ru/api/'

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
