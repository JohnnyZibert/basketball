import styles from './PlayersPage.module.scss'

export const PlayerBlock = (props: any) => {
  return (
    <>
      <img className={styles.imgCardPlayers} src={props.avatarUrl} />
    </>
  )
}
