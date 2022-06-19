import { Header } from './header/Header'
import styles from './HomePage.module.css'
import { MainContent } from './main/Main'
import { SideBarHome } from './sidebar/SideBarHome'

export const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBarHome />
        <MainContent />
      </div>
    </>
  )
}
