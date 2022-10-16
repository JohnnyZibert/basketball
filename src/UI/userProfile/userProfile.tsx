import styles from './userProfile.module.scss'

export const UserProfile = () => {
  const getName = localStorage.getItem('name')
  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userSidebar}>
        <svg
          className={styles.userIcon}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99992 1.33325C4.31992 1.33325 1.33325 4.31992 1.33325 7.99992C1.33325 11.6799 4.31992 14.6666 7.99992 14.6666C11.6799 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.6799 1.33325 7.99992 1.33325ZM7.99992 3.33325C9.10659 3.33325 9.99992 4.22659 9.99992 5.33325C9.99992 6.43992 9.10659 7.33325 7.99992 7.33325C6.89325 7.33325 5.99992 6.43992 5.99992 5.33325C5.99992 4.22659 6.89325 3.33325 7.99992 3.33325ZM3.99992 10.6532C4.85992 11.9466 6.33325 12.7999 7.99992 12.7999C9.66659 12.7999 11.1399 11.9466 11.9999 10.6532C11.9799 9.32658 9.32659 8.59991 7.99992 8.59991C6.66658 8.59991 4.01992 9.32658 3.99992 10.6532Z"
            fill="#9C9C9C"
          />
        </svg>
      </div>
      <span className={styles.userNameSide}>{getName}</span>
    </div>
  )
}
