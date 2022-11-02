import styles from './Loader.module.scss'

export const Loader = () => {
  /* eslint @typescript-eslint/no-var-requires: "off" */
  const loadingGif = require('../../assets/img/icons/loading.gif')
  return (
    <div className={styles.container}>
      <img src={loadingGif} alt="loading" />
    </div>
  )
}
