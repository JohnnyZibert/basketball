import { images } from '../../assets/img/images'
import styles from './NotFound.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={styles.NotFondContainer}>
      <img
        className={styles.NotFondImg}
        src={images.notFoundImg}
        alt="NotFound"
      />
      <div className={styles.largeText}>Page not found</div>
      <div className={styles.smallText}>
        Sorry, we can’t find what you’re looking for
      </div>
    </div>
  )
}
