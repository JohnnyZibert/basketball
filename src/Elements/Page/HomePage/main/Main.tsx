import { AddButton } from '../../../../UI/AddButton/AddButton'
import styles from './Main.module.scss'
import { Pagination } from './pagination/Pagination'
import { Search } from './search/Search'
import { SelectPageTeams } from './selectPageTeams/SelectPageTeams'
import { TeamsPage } from './teamsPage/TeamsPage'

export const MainContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.supraMain}>
          <Search />
          <AddButton children={'Add'} />
        </div>
        <TeamsPage />
      </div>
      <div className={styles.mainFooter}>
        <Pagination />
        <SelectPageTeams />
      </div>
    </div>
  )
}
