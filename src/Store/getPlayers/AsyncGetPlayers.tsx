import { createAsyncThunk } from '@reduxjs/toolkit'
import queryString from 'query-string'

import { instance } from '../../api/instance'
import { IPlayersCard } from '../../types/types'

interface IGetPlayers extends Partial<Pick<IPlayersCard, 'size' | 'page'>> {
  selectedOptions?: {
    value: string | number
    label: string | number
  }[]
  Name?: string
}

export const getPlayersRequest = createAsyncThunk(
  'players/getPlayersRequest',
  async ({ page, size, selectedOptions, Name }: IGetPlayers) => {
    const teamsIds = (selectedOptions || []).map(({ value }) => value)
    const response = await instance.get(
      queryString.stringifyUrl(
        {
          url: 'http://dev.trainee.dex-it.ru/api/Player/GetPlayers',
          query: { Page: page, pageSize: size, Name, TeamIds: teamsIds },
        },
        { arrayFormat: 'index' }
      )
    )
    return response.data
  }
)
