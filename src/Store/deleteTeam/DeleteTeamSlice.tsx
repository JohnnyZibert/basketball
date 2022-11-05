import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IOneTeam, ITeam, Status } from '../../types/types'
import { deleteTeamRequest } from './DeleteTeamAsyncAction'

const initialState: IOneTeam = {
  data: {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: '',
    id: 0,
  },
  status: Status.LOADING,
}

const deleteTeamSlice = createSlice({
  name: 'deleteTeamSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteTeamRequest.pending, (state) => {
      state.status = Status.LOADING
    })
    builder.addCase(
      deleteTeamRequest.fulfilled,
      (state, { payload }: PayloadAction<ITeam>) => {
        state.status = Status.SUCCESS
        state.data = payload
      }
    )

    builder.addCase(deleteTeamRequest.rejected, (state) => {
      state.status = Status.ERROR
    })
  },
})

// export const { } = deleteTeamSlice.actions

export default deleteTeamSlice.reducer
