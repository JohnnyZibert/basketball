import React from 'react'
import { Link } from 'react-router-dom'

import { images } from '../../../assets/img/images'
import { AuthForm } from '../../../UI/AuthForm'
import { NewButton } from '../../../UI/Button/NewButton'
import UserProfilePage from '../Profile'
import styles from './LoginPage.module.css'

export interface IRegisterForm {
  login?: string
  password?: number
  response?: never
  isAuth?: never
  setIsAuth?: never
}

const LoginPage: React.FC<IRegisterForm> = () => {
  // const handleSubmit = () => {}
  //
  // function onSubmit() {}

  return (
    <div className={styles.container}>
      <div className={styles.signIn_content}>
        <div className={styles.logoSingIn}>
          <div className={styles.logoText}>Sign In</div>
        </div>
        <AuthForm />
        <div>
          <AuthForm />
        </div>
        <NewButton type={'submit'}>Sign in</NewButton>
        <UserProfilePage />
        <div>
          Not a member yet?
          <span>
            <Link className={styles.linkSignUp} to={'/register'}>
              Sign up
            </Link>
          </span>
        </div>
      </div>

      <div className={styles.picture_wrapper}>
        <img className={styles.imgSingIn} src={images.signIn} alt="imgSingIn" />
        <img className={styles.bgSignIn} src={images.bgSignIn} alt="bgSignIn" />
      </div>
    </div>
    // <div className={styles.container}>
    //
    //
    //             <div className={styles.signInForm}>
    //                 <form onSubmit={handleSubmit(onSubmit)}>
    //                     <div className={styles.contentForm}>
    //
    //                         <div className={styles.login}>
    //                             <div>Login</div>
    //                             <input {...register("login",)} /></div>
    //                         <div className={styles.password}>
    //                             <div>Password</div>
    //                             <input  {...register("password",)} /></div>
    //                     </div>
    //                 </form>
    //                 <div className={styles.baseButton}>
    //                     <BaseButton onClick={getUsers}>
    //                         <div className={styles.signIn}>Sing in</div>
    //                     </BaseButton></div>
    //             </div>
    //
    //     </div>
    //
    //     <div className={styles.pictureContainer}>
    //         <div className={styles.img}>
    //             <img src ={images.signIn} alt="imgSingIn"/>
    //         </div>
    //
    //     </div>
    // </div>
  )
}

export default LoginPage
