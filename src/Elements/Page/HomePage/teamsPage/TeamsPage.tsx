import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import images from '../../../../assets/img/images'
import { getTeamsRequest } from '../../../../Store/getTeams/AsyncActionTeams'
import {
  setCountItem,
  setCurrentPageTeams,
} from '../../../../Store/getTeams/TeamsSlice'
import { RootState, useAppDispatch } from '../../../../Store/store'
import { AddButton } from '../../../../UI/Button/AddButton/AddButton'
import { InfoCard } from '../../../../UI/InfoCard/InfoCard'
import { EmptyTeams } from '../emptyTeams/EmptyTeams'
import { Pagination } from '../pagination/Pagination'
import { Search } from '../search/Search'
import { SelectPageTeams } from '../selectPageTeams/SelectPageTeams'
import styles from './TeamsPage.module.scss'

export const TeamsPage = () => {
  const dispatch = useAppDispatch()
  const { page, size, count, data } = useSelector(
    (state: RootState) => state.getTeams.teams
  )
  const { searchValue } = useSelector((state: RootState) => state.search)
  // const search = searchValue ? `search=${searchValue}` : ''

  const searchedTeams = data.filter((searchTeam) =>
    searchTeam.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  useEffect(() => {
    dispatch(getTeamsRequest({ page, size }))
  }, [dispatch, page, size])

  // const pagesCount = Math.ceil(teamData.count / teamData.size)
  // const pages = []
  // for (let i = 1; i < pagesCount; i++) {
  //   pages.push(i)
  // }
  const handlerOnClickPage = (data: { selected: number }) => {
    const currentPage = data.selected + 1
    dispatch(setCurrentPageTeams(currentPage))
  }

  const selectSizePage = (newValue: { value: string }) => {
    dispatch(setCountItem(Number(newValue.value)))
  }

  return (
    <div>
      <div className={styles.supraMain}>
        <Search />
        <Link className={styles.addButton} to={'newTeams'}>
          <AddButton children={<span>Add</span>} />
        </Link>
      </div>
      {searchedTeams.length === 0 ? (
        <EmptyTeams
          smallText={'Add new teams to continue'}
          imgEmpty={images.emptyTeams}
        />
      ) : (
        <InfoCard cardInfo={searchedTeams} />
      )}
      <div className={styles.mainFooter}>
        {/*{pages.map((page) => {*/}
        {/*  return (*/}
        {/*    <span*/}
        {/*      key={`${page}${page}`}*/}
        {/*      onClick={() => {*/}
        {/*        dispatch(setCurrentPage(page))*/}
        {/*      }}*/}
        {/*      className={teamData.page === page ? styles.selectedPage : ''}*/}
        {/*    >*/}
        {/*      {page}*/}
        {/*    </span>*/}
        {/*  )*/}
        {/*})}*/}
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
