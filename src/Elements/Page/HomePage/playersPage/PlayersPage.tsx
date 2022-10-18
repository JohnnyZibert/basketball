import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import images from '../../../../assets/img/images'
import { getPlayersRequest } from '../../../../Store/getPlayers/AsyncGetPlayers'
import { playersSelector } from '../../../../Store/getPlayers/getPlayersSlice'
import { getTeamsRequest } from '../../../../Store/getTeams/AsyncActionTeams'
import { RootState, useAppDispatch } from '../../../../Store/store'
import { AddButton } from '../../../../UI/Button/AddButton/AddButton'
import { InfoCard } from '../../../../UI/InfoCard/InfoCard'
import { TestSelect } from '../../../../UI/TestSelect/TestSelect'
import {
  IAddPlayersForm,
  IOptionType,
} from '../addNewPlayersPage/AddNewPlayersPage'
import { EmptyTeams } from '../emptyTeams/EmptyTeams'
import { Pagination } from '../pagination/Pagination'
import { Search } from '../search/Search'
import { SelectPageTeams } from '../selectPageTeams/SelectPageTeams'
import styles from './PlayersPage.module.scss'

export const PlayersPage = () => {
  const methods = useForm<IAddPlayersForm>()
  const dispatch = useAppDispatch()
  const data = useSelector(playersSelector)
  const { searchValue } = useSelector((state: RootState) => state.search)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const teamData = useSelector((state: RootState) => state.getTeams.teams.data)
  const optionsTeam: IOptionType[] = teamData.map((team) => ({
    value: team.id,
    label: team.name,
  }))

  const handlePageClick = ({ selected: selectedPage }: any) => {
    setCurrentPage(selectedPage)
  }

  useEffect(() => {
    dispatch(getPlayersRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [dispatch])

  const searchedPlayers = data.filter((searchPlayer) =>
    searchPlayer.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <div>
      <div className={styles.supraMain}>
        <Search />
        <div className={styles.playersSelect}>
          <TestSelect
            selectName="team"
            options={optionsTeam}
            control={methods.control}
            multi={true}
          />
        </div>
        <Link className={styles.addButton} to={'addPlayers'}>
          <AddButton children={<span>Add</span>} />
        </Link>
      </div>
      {searchedPlayers.length === 0 ? (
        <EmptyTeams
          smallText={'Add new players to continue'}
          imgEmpty={images.emptyPlayers}
        />
      ) : (
        <InfoCard cardInfo={searchedPlayers} />
      )}
      <div className={styles.mainFooter}>
        <Pagination handlePageClick={handlePageClick} />
        <SelectPageTeams />
      </div>
    </div>
  )
}
