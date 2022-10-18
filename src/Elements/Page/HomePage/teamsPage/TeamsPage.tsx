import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import images from '../../../../assets/img/images'
import { RootState } from '../../../../Store/store'
import { AddButton } from '../../../../UI/Button/AddButton/AddButton'
import { InfoCard } from '../../../../UI/InfoCard/InfoCard'
import { EmptyTeams } from '../emptyTeams/EmptyTeams'
import { Pagination } from '../pagination/Pagination'
import { Search } from '../search/Search'
import { SelectPageTeams } from '../selectPageTeams/SelectPageTeams'
import styles from './TeamsPage.module.scss'

export const TeamsPage = () => {
  const navigate = useNavigate()
  const { data } = useSelector((state: RootState) => state.getTeams.teams)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [teamPerPage] = useState(6)
  const { searchValue } = useSelector((state: RootState) => state.search)

  // const search = searchValue ? `search=${searchValue}` : ''
  const offset = currentPage * teamPerPage
  const firstPage = offset - teamPerPage
  const currentPageTeams = data.slice(firstPage, offset)
  const searchedTeams = currentPageTeams.filter((searchTeam) =>
    searchTeam.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  //
  const handlePageClick = ({ selected: selectedPage }: any) => {
    setCurrentPage(selectedPage)
  }

  const pageCount = []
  for (let i = 1; i < Math.ceil(data.length / teamPerPage); i++) {
    pageCount.push(i)
  }
  console.log(searchedTeams)

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
        {/*<PaginationTest pageNumber={pageNumber} paginate={paginate} />*/}
        {/*<PaginatedItems itemsPerPage={4} />*/}
        <Pagination handlePageClick={handlePageClick} />
        <SelectPageTeams />
      </div>
    </div>
  )
}
