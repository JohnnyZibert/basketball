import { RootState } from '../store'

export const selectorOnePlayer = (state: RootState) => state.getOnePlayer.data
