import { NewButton } from '../../../../UI/Button/NewButton'
import styles from '../main/Main.module.scss'
import { Pagination } from '../main/pagination/Pagination'
import { PlayersLabel } from '../main/playersLabel/PlayersLable'
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
        <PlayersLabel />
      </div>
      <div className={styles.mainFooter}>
        <Pagination />
        <SelectPageTeams />
      </div>
    </div>
  )
}
