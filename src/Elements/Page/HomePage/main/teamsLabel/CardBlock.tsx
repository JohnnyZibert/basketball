import styles from './TeamsLabel.module.scss'

export const CardBlock = (props: any) => {
  return (
    <>
      <img className={styles.imgCard} src={props.imageUrl} />
    </>
  )
}
