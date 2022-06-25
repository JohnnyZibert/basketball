import cnBind from 'classnames/bind'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import { images } from '../../../assets/img/images'
import {
  getToken,
  setLoginAuthRequest,
} from '../../../Store/requests/authLoginRequest'
import { AppDispatch } from '../../../Store/store'
import { NewButton } from '../../../UI/Button/NewButton'
import { FormInput } from '../../../UI/form/FormInput'
import { IAuthForm, inputType } from '../RegisterPage/RegistrationPage'
import styles from './LoginPage.module.css'

const cx = cnBind(styles)

const LoginPage = () => {
  const methods = useForm<IAuthForm>({ mode: 'onChange' })
  const dispatch: AppDispatch = useDispatch()
  const onSubmit = (data: IAuthForm) => {
    dispatch(setLoginAuthRequest(data))
  }
  return (
    <div className={styles.container}>
      {/*{getToken() ? <Navigate to={'/home'} /> : ' '}*/}

      <div className={styles.loginWrapper}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.signIn_content}>
              <div className={styles.logoSingIn}>
                <div className={styles.logoText}>Sign In</div>
              </div>
              <FormInput
                rules={{
                  required: { value: true, message: 'Name is required field' },
                }}
                name={'Login'}
              />
              <div>
                <FormInput
                  rules={{
                    required: {
                      value: true,
                      message: 'Password is required field',
                    },
                    // maxLength: { value: 15, message: 'Maximum 15 characters' },
                    // minLength: { value: 5, message: 'Minimum 5 characters' },
                  }}
                  name={'Password'}
                  type={inputType}
                />
              </div>
              <NewButton type={'submit'}>
                <span>Sign in</span>
              </NewButton>
              <div>
                Not a member yet?
                <span className={styles.btnWrapper}>
                  <Link className={styles.linkSignUp} to={'/register'}>
                    Sign up
                  </Link>
                  <Link className={styles.linkSignUp} to={'/home'}>
                    Home
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className={styles.picture_wrapper}>
        <img className={styles.imgSingIn} src={images.signIn} alt="imgSingIn" />
        <img className={styles.bgSignIn} src={images.bgSignIn} alt="bgSignIn" />
      </div>
      {/*  <ReactSelect*/}
      {/*    classNamePrefix="custom-select"*/}
      {/*    placeholder={''}*/}
      {/*    options={options}*/}
      {/*    value={getValue()}*/}
      {/*    onChange={onChange}*/}
      {/*    isMulti={isMulti}*/}
      {/*    components={animatedComponents}*/}
      {/*    isLoading={isLoading}*/}
      {/*  />*/}
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
