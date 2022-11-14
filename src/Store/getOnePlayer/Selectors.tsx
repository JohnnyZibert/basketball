import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

export const selectOnePlayer = (state: RootState) => state.getOnePlayer

const state = (store: RootState) => store

export const selectBirthdayPlayer = createSelector(
  state,
  ({ getOnePlayer }) => {
    return getOnePlayer.data
  }
)
