import images from '../../../assets/img/images'
import { UserProfile } from '../../../UI/UserProfile/userProfile'
import styles from './Header.module.scss'

export interface IPropsVisible {
  setVisibleMenu: (visibleMenu: boolean) => void
  visibleMenu: boolean
}

export const Header = ({ setVisibleMenu, visibleMenu }: IPropsVisible) => {
  return (
    <div className={styles.header}>
      <div className={styles.burgerMenu}>
        <svg
          onClick={() => setVisibleMenu(!visibleMenu)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z"
            fill="black"
            fillOpacity="0.54"
          />
        </svg>
      </div>

      <div className={styles.headerLogo}>
        <img src={images.headerLogo} alt="headerLogo" />
        <div className={styles.userHeader}>
          <UserProfile />
        </div>
      </div>
    </div>
  )
}
