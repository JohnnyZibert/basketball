import './index.scss'

import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { getToken } from './Store/loginRequest/authLoginRequest'
import { store } from './Store/store'

axios.defaults.baseURL = 'http://dev.trainee.dex-it.ru/'
axios.defaults.headers.common = { Authorization: `bearer ${getToken()}` }

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
export default axios
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
