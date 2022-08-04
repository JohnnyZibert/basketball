import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

import { RootState } from '../../../../Store/store'
import { AddButton } from '../../../../UI/AddButton/AddButton'
import styles from './Main.module.scss'
import { Pagination } from './pagination/Pagination'
import { Search } from './search/Search'
import { SelectPageTeams } from './selectPageTeams/SelectPageTeams'
import { TeamsPage } from './teamsPage/TeamsPage'

export const MainContent = () => {
  const { searchValue } = useSelector((state: RootState) => state.search)

  const search = searchValue ? `&search=${searchValue}` : ''
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.supraMain}>
          <Search />
          <Link to={'addNewTeams'}>
            <AddButton children={'Add'} />
          </Link>
        </div>
        <Outlet />
        <TeamsPage />
      </div>
      <div className={styles.mainFooter}>
        <Pagination />
        <SelectPageTeams />
      </div>
    </div>
  )
}
