import styles from './ErrorModal.module.scss'

export const ErrorModal = () => {
  return (
    <div className={styles.modalError}>
      User with the specified username / password was not found.
    </div>
  )
}
