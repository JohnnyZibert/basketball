import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { OnChangeValue } from 'react-select/dist/declarations/src/types'

import images from '../../../../assets/img/images'
import { getPlayersRequest } from '../../../../Store/getPlayers/AsyncGetPlayers'
import {
  setCurrentPagePlayers,
  setCurrentPageSize,
} from '../../../../Store/getPlayers/getPlayersSlice'
import {
  playersSelector,
  selectGetPlayers,
} from '../../../../Store/getPlayers/Selectors'
import { getTeamsRequest } from '../../../../Store/getTeams/AsyncActionTeams'
import { selectGetTeams } from '../../../../Store/getTeams/Selectors'
import { selectSearch } from '../../../../Store/search/Selectors'
import { useAppDispatch } from '../../../../Store/store'
import { AddButton } from '../../../../UI/Button/AddButton/AddButton'
import { InfoCard } from '../../../../UI/InfoCard/InfoCard'
import { isMultiType, SelectPlayer } from '../../../../UI/Select/Select'
import {
  IAddPlayersForm,
  IOptionType,
} from '../AddNewPlayersPage/AddNewPlayersPage'
import { EmptyTeams } from '../EmptyTeams/EmptyTeams'
import { Pagination } from '../Pagination/Pagination'
import { Search } from '../Search/Search'
import { SelectPageTeams } from '../SelectPageTeams/SelectPageTeams'
import styles from './PlayersPage.module.scss'

export const PlayersPage = () => {
  const methods = useForm<IAddPlayersForm>()
  const dispatch = useAppDispatch()
  const dataPlayers = useSelector(playersSelector)
  const { searchValue } = useSelector(selectSearch)
  const { count, size, page } = useSelector(selectGetPlayers)
  const teamData = useSelector(selectGetTeams)
  const [selectedOptions, setSelectedOptions] = useState()
  const [_, setIsSelectOpen] = useState(false)

  const optionsTeam: IOptionType[] = teamData.data.map((team) => ({
    value: team.id,
    label: team.name,
  }))
  useEffect(() => {
    dispatch(getTeamsRequest({ page: teamData.page, size: teamData.size }))
  }, [dispatch])

  useEffect(() => {
    dispatch(
      getPlayersRequest({ page, size, selectedOptions, Name: searchValue })
    )
  }, [dispatch, page, size, selectedOptions, searchValue])

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
            // selectType="100"
          />
        </div>
        <Link className={styles.addButton} to={'addPlayers'}>
          <AddButton children={<span>Add</span>} />
        </Link>
      </div>
      {dataPlayers.length === 0 ? (
        <EmptyTeams
          smallText={'Add new players to continue'}
          imgEmpty={images.emptyPlayers}
        />
      ) : (
        <InfoCard cardInfo={dataPlayers} />
      )}
      <div className={styles.mainFooter}>
        <Pagination
          count={count}
          size={size}
          handleOnClick={handlerOnClickPage}
        />
        <SelectPageTeams size={size} onChangeSize={selectSizePage} />
      </div>
    </div>
  )
}
