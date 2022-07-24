import styles from './TablePlayers.module.scss'

export const TablePlayers = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHead}>
        <strong>Roster</strong>
      </div>
      <div className={styles.tableBody}>
        <span>#</span>
        <span>Player</span>
        <span>Height</span>
        <span>Weight</span>
        <span>Age</span>
        <span>aloalo </span>
        <span>
          aloalo <span>name</span>
        </span>
        <span>aloalo</span>
        <span>aloalo</span>
        <span>aloalo</span>
      </div>
    </div>
  )
}
