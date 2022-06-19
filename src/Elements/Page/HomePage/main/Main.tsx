import { NewButton } from '../../../../UI/Button/NewButton'
import styles from './Main.module.scss'
import { Pagination } from './pagination/Pagination'
import { Search } from './search/Search'
import { SelectPageTeams } from './selectPageTeams/SelectPageTeams'
import { TeamsLabel } from './teamsLabel/TeamsLabel'

export const MainContent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.supraMain}>
          <Search />
          <NewButton children={'Add'} />
        </div>
        <TeamsLabel />
      </div>
      <div className={styles.mainFooter}>
        <Pagination />
        <SelectPageTeams />
      </div>
    </div>
  )
}
