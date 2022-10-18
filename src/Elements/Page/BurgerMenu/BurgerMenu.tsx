import { SignOutButton } from '../../../UI/Button/SignOutButton/SignOutButton'
import { UserProfile } from '../../../UI/UserProfile/userProfile'
import { SideBarHome } from '../HomePage/sidebar/SideBarHome'
import styles from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
  return (
    <div className={styles.burgerContainer}>
      <div className={styles.userSideContainer}>
        <UserProfile />
        <div className={styles.menu}>
          <SideBarHome />
          <div className={styles.signOutBlockBurger}>
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  )
}
