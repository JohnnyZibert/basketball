import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import images from '../../../assets/img/images'
import { setRegistrationAuthRequest } from '../../../Store/registerRequest/authRequests'
import { AppDispatch } from '../../../Store/store'
import { IAuthForm } from '../../../types/types'
import { BtnSave } from '../../../UI/Button/SaveFormButton/BtnSave'
import { Checkbox } from '../../../UI/CheckBox/CheckBox'
import { FormInput } from '../../../UI/Form/FormInput'
import styles from './Register.module.scss'

const RegisterForm: React.FC = () => {
  const methods = useForm<IAuthForm>()
  const dispatch: AppDispatch = useDispatch()
  const [isShow, setShow] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)
  const { isValid } = methods.formState

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

  const handleOnClickEye = () => {
    setShow((prevState) => !prevState)
  }
  const handleChange = () => {
    setChecked(!checked)
  }
  const icon = isShow ? eye : eyeOff

  return (
    <div className={styles.container}>
      <div className={styles.registerContainer}>
        <FormProvider {...methods}>
          <form
            className={styles.regForm}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className={styles.logoSingUp}>Sign up</div>
            <FormInput
              rules={{
                required: {
                  value: true,
                  message: 'User name is required field',
                },
              }}
              name={'Name'}
              label={'Name'}
            />
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
            <FormInput
              rules={{
                required: {
                  value: true,
                  message: ' Repeat password is required field',
                },
                maxLength: { value: 15, message: 'Maximum 15 characters' },
                minLength: { value: 5, message: 'Minimum 5 characters' },
                validate: (v: string | null) =>
                  v === methods.getValues('password'),
              }}
              name={'Enter your password again'}
              label={'Enter your password again'}
              type={isShow ? 'text' : 'password'}
              onEyeClick={handleOnClickEye}
              iconInput={icon}
            />
            <div className={styles.checkBox}>
              <Checkbox checked={checked} onChange={handleChange} /> I accept
              the agreement
            </div>
            <BtnSave type="submit" disabled={!isValid}>
              Sing Up
            </BtnSave>{' '}
            <div className={styles.already}>
              <div className={styles.alreadyText}>Already a member?</div>
              <div className={styles.toSignIn}>
                <Link to={'/login'}>Sing in</Link>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.imgSignUp} src={images.imgReg} alt="imgSingUp" />
      </div>
    </div>
  )
}

export default RegisterForm
