import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { OnChangeValue } from 'react-select/dist/declarations/src/types'

import images from '../../../assets/img/images'
import { getPlayersRequest } from '../../../Store/getPlayers/AsyncGetPlayers'
import {
  setCurrentPagePlayers,
  setCurrentPageSize,
} from '../../../Store/getPlayers/getPlayersSlice'
import {
  playersSelector,
  selectGetPlayers,
} from '../../../Store/getPlayers/Selectors'
import { getTeamsRequest } from '../../../Store/getTeams/AsyncActionTeams'
import { selectGetTeams } from '../../../Store/getTeams/Selectors'
import { selectSearch } from '../../../Store/search/Selectors'
import { useAppDispatch } from '../../../Store/store'
import { IAddPlayersForm, IOptionType } from '../../../types/types'
import { AddButton } from '../../../UI/Button/AddButton/AddButton'
import { InfoCard } from '../../../UI/InfoCard/InfoCard'
import { Loader } from '../../../UI/Loader/Loader'
import { isMultiType, SelectPlayer } from '../../../UI/Select/Select'
import { EmptyTeams } from '../EmptyTeams/EmptyTeams'
import { Pagination } from '../Pagination/Pagination'
import { Search } from '../Search/Search'
import { SelectPageTeams } from '../SelectPageTeams/SelectPageTeams'
import styles from './PlayersPage.module.scss'

export const PlayersPage = () => {
  const methods = useForm<IAddPlayersForm>()
  const dispatch = useAppDispatch()
  const dataPlayers = useSelector(playersSelector)
  const teamData = useSelector(selectGetTeams)
  const { searchValue } = useSelector(selectSearch)
  const { players, status } = useSelector(selectGetPlayers)

  const [selectedOptions, setSelectedOptions] = useState<IOptionType[]>()
  const [_, setIsSelectOpen] = useState<boolean>(false)

  const optionsTeam: IOptionType[] = teamData.teams.data.map((team) => ({
    value: team.id,
    label: team.name,
  }))
  useEffect(() => {
    dispatch(
      getTeamsRequest({ page: teamData.teams.page, size: teamData.teams.size })
    )
  }, [dispatch])

  useEffect(() => {
    dispatch(
      getPlayersRequest({
        page: players.page,
        size: players.size,
        selectedOptions,
        Name: searchValue,
      })
    )
  }, [dispatch, players.page, players.size, selectedOptions, searchValue])

  const handlerOnClickPage = (data: { selected: number }) => {
    const currentPage = data.selected + 1
    dispatch(setCurrentPagePlayers(currentPage))
  }
  const selectSizePage = (value: string) => {
    dispatch(setCurrentPageSize(Number(value)))
  }
  const handleOnBlur = () => {
    setIsSelectOpen(false)
  }
  const handleOnFocus = () => {
    setIsSelectOpen(true)
  }
  const handleOnChange = (
    option: (newValue: OnChangeValue<IOptionType, isMultiType>) => void
  ) => {
    // @ts-ignore
    setSelectedOptions(option)
  }

  return (
    <div>
      <div className={styles.supraMain}>
        <Search />
        <div className={styles.playersSelect}>
          <SelectPlayer
            selectName="team"
            options={optionsTeam}
            control={methods.control}
            multi={true}
            value={selectedOptions}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            // @ts-ignore
            onChange={handleOnChange}
            // selectType={'propsStyle'}
          />
        </div>
        <Link className={styles.addButton} to={'addPlayers'}>
          <AddButton children={<span>Add</span>} />
        </Link>
      </div>
      {status === 'loading' ? (
        <Loader />
      ) : dataPlayers.length === 0 ? (
        <EmptyTeams
          smallText={'Add new players to continue'}
          imgEmpty={images.emptyPlayers}
        />
      ) : (
        <InfoCard cardInfo={dataPlayers} />
      )}
      <div className={styles.mainFooter}>
        <Pagination
          count={players.count}
          size={players.size}
          handleOnClick={handlerOnClickPage}
        />
        <SelectPageTeams size={players.size} onChangeSize={selectSizePage} />
      </div>
    </div>
  )
}
