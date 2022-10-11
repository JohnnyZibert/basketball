import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPlayersRequest } from '../../../../../Store/getPlayers/AsyncGetPlayers'
import { playersSelector } from '../../../../../Store/getPlayers/getPlayersSlice'
import { getTeamsRequest } from '../../../../../Store/getTeams/AsyncActionTeams'
import { RootState, useAppDispatch } from '../../../../../Store/store'
import { AddButton } from '../../../../../UI/AddButton/AddButton'
import { TestSelect } from '../../../../../UI/testSelect/TestSelect'
import {
  IAddPlayersForm,
  IOptionType,
} from '../../addNewPlayersPage/AddNewPlayersPage'
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
        <Link to={'addPlayers'}>
          <AddButton children={<span>Add</span>} />
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <ul className={styles.cartPlayersBox}>
          {searchedPlayers.map((item) => (
            <Link key={item.id} className={styles.playerCard} to={`${item.id}`}>
              <div className={styles.playerCardTop}>
                <img src={item.avatarUrl} alt={'logoPlayers'} />
              </div>
              <div className={styles.playerCardBottom}>
                <span className={styles.playerName}>{item.name}</span> {''}
                <span className={styles.playerNumber}>#{item.number}</span>
                <br />
                <span className={styles.teamName}>{item.teamName}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.mainFooter}>
        <Pagination handlePageClick={handlePageClick} />
        <SelectPageTeams />
      </div>
    </div>
  )
}
