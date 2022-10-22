import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { instance } from '../../../../api/instance'
import images from '../../../../assets/img/images'
import { getToken } from '../../../../Store/LoginRequest/authLoginRequest'
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
  const navigate = useNavigate()
  const { data } = useSelector((state: RootState) => state.getTeams.teams)
  const team = useSelector((state: RootState) => state.getTeams.teams)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [teamPerPage] = useState(6)
  const { searchValue } = useSelector((state: RootState) => state.search)

  // const search = searchValue ? `search=${searchValue}` : ''
  // const offset = currentPage * teamPerPage
  // const firstPage = offset - teamPerPage
  // const currentPageTeams = data.slice(firstPage, offset)
  const searchedTeams = data.filter((searchTeam) =>
    searchTeam.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  const fetchTeamPage = async (selectedPage: number) => {
    const response = await instance.get(
      `http://dev.trainee.dex-it.ru/api/Team/GetTeams?Page=${selectedPage}&PageSize=${team.size}`
    )
    return response.data
  }
  const handlePageClick = async ({
    selected: selectedPage,
  }: {
    selected: number
  }) => {
    const currentPage = selectedPage + 1
    const teamFromServer = await fetchTeamPage(currentPage)
    console.log(teamFromServer)
  }

  // const pageCount = []
  // for (let i = 1; i < Math.ceil(team.count / team.size); i++) {
  //   pageCount.push(i)
  // }
  const pageCount = Math.ceil(team.count / team.size)

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
        <Pagination
          handlePageClick={handlePageClick}
          currentPageTeams={team.page}
          size={team.size}
          pageCount={pageCount}
        />
        <SelectPageTeams />
      </div>
    </div>
  )
}
