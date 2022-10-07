import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISearchValue {
  searchValue: string
}

const initialState: ISearchValue = {
  searchValue: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
      console.log(action.payload)
    },
  },
})

export const { setSearchValue } = searchSlice.actions

export default searchSlice.reducer
