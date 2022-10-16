import { UserProfile } from '../../../UI/userProfile/userProfile'
import { SideBarHome } from '../HomePage/sidebar/SideBarHome'
import styles from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
  return (
    <div className={styles.burgerContainer}>
      <div className={styles.userSideContainer}>
        <UserProfile />
        <div className={styles.menu}>
          <SideBarHome />
        </div>
      </div>
    </div>
  )
}
