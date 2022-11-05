import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import images from '../../../assets/img/images'
import { getTeamsRequest } from '../../../Store/getTeams/AsyncActionTeams'
import { selectGetTeams } from '../../../Store/getTeams/Selectors'
import {
  setCountItem,
  setCurrentPageTeams,
} from '../../../Store/getTeams/TeamsSlice'
import { selectSearch } from '../../../Store/search/Selectors'
import { useAppDispatch } from '../../../Store/store'
import { AddButton } from '../../../UI/Button/AddButton/AddButton'
import { InfoCard } from '../../../UI/InfoCard/InfoCard'
import { Loader } from '../../../UI/Loader/Loader'
import { EmptyTeams } from '../EmptyTeams/EmptyTeams'
import { Pagination } from '../Pagination/Pagination'
import { Search } from '../Search/Search'
import { SelectPageTeams } from '../SelectPageTeams/SelectPageTeams'
import styles from './TeamsPage.module.scss'

export const TeamsPage = () => {
  const dispatch = useAppDispatch()
  const { teams, status } = useSelector(selectGetTeams)
  const { searchValue } = useSelector(selectSearch)

  const searchedTeams = teams.data.filter((searchTeam) =>
    searchTeam.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  useEffect(() => {
    dispatch(getTeamsRequest({ page: teams.page, size: teams.size }))
  }, [dispatch, teams.page, teams.size])

  const handlerOnClickPage = (data: { selected: number }) => {
    const currentPage = data.selected + 1
    dispatch(setCurrentPageTeams(currentPage))
  }

  const selectSizePage = (size: string) => {
    dispatch(setCountItem(Number(size)))
  }

  return (
    <div>
      <div className={styles.supraMain}>
        <Search />
        <Link className={styles.addButton} to={'newTeams'}>
          <AddButton children={<span>Add</span>} />
        </Link>
      </div>
      {status === 'loading' ? (
        <Loader />
      ) : searchedTeams.length !== 0 ? (
        <InfoCard cardInfo={searchedTeams} />
      ) : (
        <EmptyTeams
          smallText={'Add new teams to continue'}
          imgEmpty={images.emptyTeams}
        />
      )}
      <div className={styles.mainFooter}>
        <Pagination
          count={teams.count}
          size={teams.size}
          handleOnClick={handlerOnClickPage}
          page={teams.page}
        />
        <SelectPageTeams size={teams.size} onChangeSize={selectSizePage} />
      </div>
    </div>
  )
}
