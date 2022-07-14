import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../../../Store/store'
import { AddButton } from '../../../../UI/AddButton/AddButton'
import { EmptyTeams } from '../emptyTeams/EmptyTeams'
import styles from './Main.module.scss'
import { Pagination } from './pagination/Pagination'
import { Search } from './search/Search'
import { SelectPageTeams } from './selectPageTeams/SelectPageTeams'
import { TeamsPage } from './teamsPage/TeamsPage'

export const MainContent = () => {
  const statusTeams = useSelector((state: RootState) => state.getTeams.status)
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.supraMain}>
          <Search />
          <Link to={'/addTeamsPage'}>
            <AddButton children={'Add'} />
          </Link>
        </div>
        {statusTeams ? <TeamsPage /> : <EmptyTeams />}
      </div>
      <div className={styles.mainFooter}>
        <Pagination />
        <SelectPageTeams />
      </div>
    </div>
  )
}
