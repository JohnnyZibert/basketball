import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { setRegistrationAuthRequest } from '../../../Store/requests/authRequests'
import { AppDispatch } from '../../../Store/store'
import { FormInput } from '../../../UI/form/FormInput'

export interface IAuthForm {
  userName: string
  login: string
  password: string
  repeatPassword: string
}

const RegisterForm = () => {
  const methods = useForm<IAuthForm>()
  const dispatch: AppDispatch = useDispatch()
  console.log(methods.formState.errors)

  const onSubmit = (data: IAuthForm) => {
    if (methods.getValues('password') === methods.getValues('repeatPassword')) {
      dispatch(setRegistrationAuthRequest(data))
    } else {
      methods.setError('repeatPassword', {
        type: 'required',
        message: 'ТЫ ПИДОР',
      })
    }
  }
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInput
            rules={{ required: { value: true, message: 'ТЫ ПИДОР' } }}
            name={'userName'}
          />
          <FormInput
            rules={{ required: { value: true, message: 'ТЫ ПИДОР' } }}
            name={'login'}
          />
          <FormInput
            rules={{ required: { value: true, message: 'ТЫ ПИДОР' } }}
            name={'password'}
          />
          <FormInput
            rules={{
              required: { value: true, message: 'ТЫ ПИДОР' },
              validate: (v) => v === methods.getValues('password'),
            }}
            name={'repeatPassword'}
          />
          <button type="submit">Зайти </button>
        </form>
      </FormProvider>
    </>
    // <div className={styles.container}>
    //   <div className={styles.registerContainer}>
    //     <form className={styles.regForm}>
    //       <AuthForm
    //         handleSubmit={handleSubmit}
    //         control={control}
    //         reset={reset}
    //       />
    //       <AuthForm />
    //       <AuthForm />
    //       <AuthForm />
    //       <div>
    //         <input type="checkbox" /> I accept the agreement
    //         <div />
    //         <NewButton onClick={handleSubmit}>Sing up</NewButton>{' '}
    //         <div>
    //           Already a member?
    //           <span>
    //             {' '}
    //             <Link to={'/'}>Sing in</Link>
    //           </span>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   <div className={styles.picture_wrapper}>
    //     <img className={styles.bgSignUp} src={images.bgSignUp} alt="bgSingUp" />
    //     <img
    //       className={styles.imgSignUp}
    //       src={images.imgSingUp}
    //       alt="imgSingUp"
    //     />
    //   </div>
    // </div>
  )
}

export default RegisterForm
