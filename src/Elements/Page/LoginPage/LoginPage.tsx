import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import images from '../../../assets/img/images'
import { setLoginAuthRequest } from '../../../Store/loginRequest/authLoginRequest'
import { AppDispatch } from '../../../Store/store'
import { BtnSave } from '../../../UI/Button/SaveFormButton/BtnSave'
import { FormInput } from '../../../UI/Form/FormInput'
import { IAuthForm } from '../RegisterPage/RegistrationPage'
import styles from './LoginPage.module.scss'

const LoginPage: React.FC = () => {
  const methods = useForm<IAuthForm>({ mode: 'onChange' })
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const [isShow, setShow] = useState(false)

  const handleOnClickEye = () => {
    setShow((prevState) => !prevState)
  }
  const onSubmit = (data: IAuthForm) => {
    dispatch(setLoginAuthRequest({ data, action: toMain }))
  }
  const icon = isShow ? eye : eyeOff

  const toMain = () => {
    navigate('/teams')
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <FormProvider {...methods}>
          <form
            className={styles.loginForm}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className={styles.logoSingIn}>Sign In</div>
            <FormInput
              rules={{
                required: { value: true, message: 'Login is required field' },
              }}
              name={'Login'}
              label={'Login'}
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
              label={'Password'}
              type={isShow ? 'text' : 'password'}
              onEyeClick={handleOnClickEye}
              iconInput={icon}
            />
            <BtnSave type="submit">Sing In</BtnSave>{' '}
            <div className={styles.isMember}>
              <div className={styles.isMember}>Not a member yet?</div>
              <div className={styles.toSignUp}>
                <Link to={'/register'}>Sing up</Link>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgSignIn}
          src={images.imgSingIn}
          alt="imgSingUp"
        />
      </div>
    </div>
  )
}

export default LoginPage
