import cnBind from 'classnames/bind'
import React, { useState } from 'react'
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
import styles from './LoginPage.module.scss'

const cx = cnBind(styles)

const LoginPage = () => {
  const methods = useForm<IAuthForm>({ mode: 'onChange' })
  const dispatch: AppDispatch = useDispatch()
  const onSubmit = (data: IAuthForm) => {
    dispatch(setLoginAuthRequest(data))
  }

  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <FormProvider {...methods}>
          <form
            className={styles.regForm}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className={styles.logoSingUp}>Sign In</div>
            <FormInput
              rules={{
                required: { value: true, message: 'Login is required field' },
              }}
              name={'Login'}
            />
            <FormInput
              rules={{
                required: {
                  value: true,
                  message: 'password is required field',
                },
                maxLength: { value: 15, message: 'Maximum 15 characters' },
                minLength: { value: 5, message: 'Minimum 5 characters' },
              }}
              name={'Password'}
              // type={inputTypePas}
              // onEyeClick={handleToggle}
              // eyeIcon={icon}
            />
            <NewButton type="submit">Sing Up</NewButton>{' '}
            <div className={styles.isMember}>
              <div className={styles.isMember}>Not a member yet?</div>
              <div>
                <Link to={'/register'}>Sing up</Link>
                <Link to={'/home/players'}>Profile</Link>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgSignUp}
          src={images.imgSingUp}
          alt="imgSingUp"
        />
      </div>
    </div>
  )
}
// }
//       {/*  <ReactSelect*/}
//       {/*    classNamePrefix="custom-select"*/}
//       {/*    placeholder={''}*/}
//       {/*    options={options}*/}
//       {/*    value={getValue()}*/}
//       {/*    onChange={onChange}*/}
//       {/*    isMulti={isMulti}*/}
//       {/*    components={animatedComponents}*/}
//       {/*    isLoading={isLoading}*/}
//       {/*  />*/
//
// }
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
