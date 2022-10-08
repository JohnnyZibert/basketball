import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../../../../Store/store'
import { AddButton } from '../../../../../UI/AddButton/AddButton'
import { Pagination } from '../pagination/Pagination'
import { Search } from '../search/Search'
import { SelectPageTeams } from '../selectPageTeams/SelectPageTeams'
import styles from './TeamsPage.module.scss'

export const TeamsPage = () => {
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
    console.log(selectedPage)
  }

  const pageCount = []
  for (let i = 1; i < Math.ceil(data.length / teamPerPage); i++) {
    pageCount.push(i)
  }

  return (
    <div>
      <div className={styles.supraMain}>
        <Search />
        <Link to={'newTeams'}>
          <AddButton children={<span>Add</span>} />
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <ul className={styles.cartTeamsBox}>
          {searchedTeams.map((item) => (
            <Link key={item.id} className={styles.teamsCard} to={`${item.id}`}>
              <div className={styles.teamsCardTop}>
                <img
                  className={styles.logoTeams}
                  src={item.imageUrl}
                  alt={'logoTeam'}
                />
              </div>
              <div className={styles.teamsCardBottom}>
                {item.name} <br />
                <span>Year of foundation:{item.foundationYear}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.mainFooter}>
        {/*<PaginationTest pageNumber={pageNumber} paginate={paginate} />*/}
        {/*<PaginatedItems itemsPerPage={4} />*/}
        <Pagination handlePageClick={handlePageClick} />
        <SelectPageTeams />
      </div>
    </div>
  )
}
