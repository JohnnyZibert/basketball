import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import { images } from '../../../assets/img/images'
import { setLoginAuthRequest } from '../../../Store/requests/authLoginRequest'
import { IInitialState } from '../../../Store/slices/authLoginSlice'
import { AppDispatch } from '../../../Store/store'
import { NewButton } from '../../../UI/Button/NewButton'
import { FormInput } from '../../../UI/form/FormInput'
import { IAuthForm } from '../RegisterPage/RegistrationPage'
import styles from './LoginPage.module.css'

const LoginPage = () => {
  const isAuth = useSelector<IInitialState>((state) => state.isAuth)
  const methods = useForm<IAuthForm>()
  const dispatch: AppDispatch = useDispatch()

  const onSubmit = (userData: IAuthForm) => {
    dispatch(setLoginAuthRequest(userData))
    if (isAuth) {
      ;<Navigate to={'/profile'} />
    }
  }

  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.signIn_content}>
            <div className={styles.logoSingIn}>
              <div className={styles.logoText}>Sign In</div>
            </div>
            <FormInput
              rules={{ required: { value: true, message: 'САМ ПИДОР' } }}
              name={'login'}
            />
            <div>
              <FormInput
                rules={{ required: { value: true, message: 'Сам пидор' } }}
                name={'password'}
              />
            </div>
            <NewButton type={'submit'}>Sign in</NewButton>
            <div>
              Not a member yet?
              <span>
                <Link className={styles.linkSignUp} to={'/register'}>
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </form>
      </FormProvider>

      <div className={styles.picture_wrapper}>
        <img className={styles.imgSingIn} src={images.signIn} alt="imgSingIn" />
        <img className={styles.bgSignIn} src={images.bgSignIn} alt="bgSignIn" />
      </div>
    </div>
  )
}
export default LoginPage
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
