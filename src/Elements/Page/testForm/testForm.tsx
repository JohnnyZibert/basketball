import axios from 'axios'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

export interface IData {
  userName?: string
  login?: string
  password?: string
}

const TestForm: FC<IData> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data: any) => {
    console.log(data)
    await axios.post(
      'https://dev.trainee.dex-it.ru/api/Auth/SignUp',
      data

      //   method: 'POST',
      //   headers: { 'Content-type': 'application/json' },
      //   body: JSON.stringify(data),
      // }
    )
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register('userName', { required: true })} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('login', { required: true })} />
      <input {...register('password', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default TestForm
