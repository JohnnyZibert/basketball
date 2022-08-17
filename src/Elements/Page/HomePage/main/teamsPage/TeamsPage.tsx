import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { getTeamsRequest } from '../../../../../Store/getTeams/AsyncActionTeams'
import { RootState, useAppDispatch } from '../../../../../Store/store'
import { AddButton } from '../../../../../UI/AddButton/AddButton'
import { Pagination } from '../pagination/Pagination'
import { Search } from '../search/Search'
import { SelectPageTeams } from '../selectPageTeams/SelectPageTeams'
import styles from './TeamsPage.module.scss'

export const TeamsPage = () => {
  const dispatch = useAppDispatch()
  const { data } = useSelector((state: RootState) => state.getTeams.teams)
  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [])

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
          {data.map((item) => (
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
        <Pagination />
        <SelectPageTeams />
      </div>
    </div>
  )
}
