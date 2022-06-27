import { NewButton } from '../../../../UI/Button/NewButton'
import styles from '../main/Main.module.scss'
import { Pagination } from '../main/pagination/Pagination'
import { Search } from '../main/search/Search'
import { SelectPageTeams } from '../main/selectPageTeams/SelectPageTeams'

export const PlayersPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.supraMain}>
          <Search />
          <NewButton children={'Add'} />
        </div>
        <div className={styles.uploadContainer}>
          <label htmlFor="file-input">Выберите файл</label>
        </div>
      </div>
      <div className={styles.mainFooter}>
        <Pagination />
        <SelectPageTeams />
      </div>
    </div>
  )
}
