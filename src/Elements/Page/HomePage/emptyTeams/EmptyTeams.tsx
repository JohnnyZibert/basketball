import images from '../../../../assets/img/images'
import styles from './EmptyTeams.module.scss'

export const EmptyTeams = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.emptyTeamsContainer}>
        <img src={images.emptyTeams} alt="EmptyImg" />
        <h1>Empty here</h1>
        <span>Add new teams to continue</span>
      </div>
    </div>
  )
}
