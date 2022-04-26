// import { createSlice } from '@reduxjs/toolkit'
//
// import { setLoginAuthRequest } from '../requests/authLoginRequest'
//
// export interface IInitialState {
//   authStatus: boolean
//   name: string | null
//   avatarUrl: string | null
//   token: string | null
// }
//
// const initialState: IInitialState = {
//   authStatus: false,
//   name: null,
//   avatarUrl: null,
//   token: null,
// }
// //
// // export const AuthLoginSlice = createSlice({
// //   name: 'AuthLoginSlice',
// //   initialState,
// //   reducers: {
// //     // setUserData(state = initialState, action) {
// //     //   state.userData = action.payload
// //     //   console.log(action.payload)
// //     },
// //   const initialState = {
// //     authStatus: false,
// //   }
//
// export const authLoginSlice = createSlice({
//   name: 'setUserData',
//   initialState,
//   reducers: {},
// })
//
// // export const {  } = authSlice.actions;
//
// export default authLoginSlice.reducer

const SET_USER_DATA = 'SET_USER_DATA'
// const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'
export interface IInitialState {
  isAuth: (state: IInitialState) => unknown
  authStatus: boolean
  name: string | null
  avatarUrl: string | null
  token: string | null
}
const initialState = {
  login: null as number | null,
  password: null as string | null,
  isAuth: false,
}
export type IInitialStateTypes = typeof initialState

const authReducer = (state = initialState, action: any): IInitialStateTypes => {
  switch (action.type) {
    case SET_USER_DATA:
      // case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.userData,
        isAuth: true,
      }

    default:
      return state
  }
}

// export const login =
//   (
//     email: string,
//     password: string,
//     rememberMe: boolean,
//     captcha: string | null
//   ) =>
//   async (dispatch: any) => {
//     const response = await authAPI.login(email, password, rememberMe)
//     if (response.data.resultCode === 0) {
//       dispatch(getAuthUserData())
//     } else {
//       if (response.data.resultCode === 10) {
//         dispatch(getCaptchaUrl())
//       }
//       const message =
//         response.data.messages.length > 0
//           ? response.data.messages[0]
//           : 'Some error'
//       dispatch(stopSubmit('login', { _error: message }))
//     }
//   }
//
// export const logout = () => async (dispatch: any) => {
//   const response = await authAPI.logout()
//
//   if (response.data.resultCode === 0) {
//     dispatch(getCaptchaUrl())
//   }
// }
export const setUserData = (
  login: string,
  password: string,
  isAuth: boolean
) => ({ type: SET_USER_DATA, userData: login, password, isAuth })

export default authReducer
