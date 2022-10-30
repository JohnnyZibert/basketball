import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'

export const selectGetPlayers = (state: RootState) => state.getPlayers.players

const state = (store: RootState) => store

export const playersSelector = createSelector(
  state,
  ({ getTeams, getPlayers }) => {
    const playersTeam = getPlayers.players.data.map((player) => {
      return {
        ...player,
        teamName:
          getTeams.teams.data.find((team) => team.id === player.team)?.name ||
          '',
      }
    })
    return playersTeam
  }
)
