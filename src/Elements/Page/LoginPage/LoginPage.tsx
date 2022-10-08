import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import images from '../../../assets/img/images'
import { setLoginAuthRequest } from '../../../Store/LoginRequest/authLoginRequest'
import { AppDispatch } from '../../../Store/store'
import { BtnSave } from '../../../UI/Button/BtnSave'
import { FormInput } from '../../../UI/form/FormInput'
import { IAuthForm } from '../RegisterPage/RegistrationPage'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const methods = useForm<IAuthForm>({ mode: 'onChange' })
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const toMain = () => {
    navigate('/teams')
  }
  const onSubmit = (data: IAuthForm) => {
    dispatch(setLoginAuthRequest({ data, action: toMain }))
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
            />
            <BtnSave type="submit">Sing In</BtnSave>{' '}
            <div className={styles.isMember}>
              <div className={styles.isMember}>Not a member yet?</div>
              <div>
                <Link to={'/register'}>Sing Up</Link>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgSignUp}
          src={images.imgSingIn}
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
