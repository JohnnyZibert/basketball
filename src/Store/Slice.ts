import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// @ts-ignore
export const addNewUsers = async ({ data }) => {
  try {
    const response = await fetch(
      'https://dev.trainee.dex-it.ru/api/Auth/SignUp',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      }
    )
    if (!response.ok) {
      throw new Error("Can/'t add user.ServerError")
    }
  } catch (error) {
    // @ts-ignore
    return rejectWithValue(error.message)
  }
}

//
//
//
// createAsyncThunk(
//   'users/addNewUsers',
//   // @ts-ignore
//   async function ({ data }, { rejectWithValue, dispatch }) {
//     try {
//       const user = {
//         userName: data.name,
//         login: data.login,
//         password: data.password,
//       }
//       const response = await fetch(
//         'https://dev.trainee.dex-it.ru/api/Auth/SignUp',
//         {
//           method: 'POST',
//           headers: { 'Content-type': 'application/json' },
//           body: JSON.stringify(user),
//         }
//       )
//       if (!response.ok) {
//         throw new Error("Can/'t add user.ServerError")
//       }
//     } catch (error) {
//       // @ts-ignore
//       return rejectWithValue(error.message)
//     }
//   }
// )

const setError = (
  state: { status: string; error: any },
  action: { payload: any }
) => {
  state.status = 'rejected'
  state.error = action.payload
}

// @ts-ignore
const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },

  reducers: {
    addUser(state, action) {
      // @ts-ignore
      state.users.push(action.payload)
    },
  },
  // @ts-ignore
  extraReducers: {
    // @ts-ignore
    [addNewUsers.pending]: (state: { status: string; error: null }) => {
      state.status = 'loading'
      state.error = null
    },
    // @ts-ignore
    [addNewUsers.fulfilled]: (state, action) => {
      // @ts-ignore
      state.status = 'resolved'
      // @ts-ignore
      state.todos = action.payload
    },
    // @ts-ignore
    [addNewUsers.rejected]: setError,
  },
})

const { addUser } = userSlice.actions

export default userSlice.reducer
