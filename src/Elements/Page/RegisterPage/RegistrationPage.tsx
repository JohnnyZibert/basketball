import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { images } from '../../../assets/img/images'
import { setRegistrationAuthRequest } from '../../../Store/requests/authRequests'
import { AppDispatch } from '../../../Store/store'
import { NewButton } from '../../../UI/Button/NewButton'
import { FormInput } from '../../../UI/form/FormInput'
import styles from './register.module.css'

export interface IAuthForm {
  userName: string | null
  login: string | null
  password: string | null
  repeatPassword: string | null
  token: any
}

const RegisterForm = () => {
  const methods = useForm<IAuthForm>()
  const dispatch: AppDispatch = useDispatch()

  const onSubmit = (data: IAuthForm) => {
    if (methods.getValues('password') === methods.getValues('repeatPassword')) {
      dispatch(setRegistrationAuthRequest(data))
    } else {
      methods.setError('repeatPassword', {
        type: 'required',
        message: 'The password does not match, please enter a valid value',
      })
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <FormProvider {...methods}>
          <form
            className={styles.regForm}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormInput
              rules={{
                required: {
                  value: true,
                  message: 'User name is required field',
                },
              }}
              name={'Name'}
            />
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
            />
            <FormInput
              rules={{
                required: {
                  value: true,
                  message: ' Repeat password is required field',
                },
                maxLength: { value: 15, message: 'Maximum 15 characters' },
                minLength: { value: 5, message: 'Minimum 5 characters' },
                validate: (v) => v === methods.getValues('password'),
              }}
              name={'Enter your password again'}
            />
            <NewButton type="submit">Sing up</NewButton>{' '}
            <div>
              <input type="checkbox" /> I accept the agreement
            </div>
            <div>
              Already a member?
              <span>
                {' '}
                <Link to={'/'}>Sing in</Link>
              </span>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className={styles.picture_wrapper}>
        <img className={styles.bgSignUp} src={images.bgSignUp} alt="bgSingUp" />
        <img
          className={styles.imgSignUp}
          src={images.imgSingUp}
          alt="imgSingUp"
        />
      </div>
    </div>
  )
}

export default RegisterForm
