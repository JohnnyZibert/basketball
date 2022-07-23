import React, { useState } from 'react'
import { Controller, useForm, useFormContext } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'

import styles from './formInput.module.scss'

export const FormInput = ({
  name,
  rules,
  type = 'text',
  options,
}: {
  name: string
  rules?: RegisterOptions
  type?: string
  onEyeClick?: () => void
  eyeIcon?: string
  options?: { value: string; label: string }[]
}) => {
  const { control, formState } = useFormContext()
  const [inputTypePas, setType] = useState('password')
  const { register, handleSubmit, setValue } = useForm()

  const handleToggle = () => {
    if (inputTypePas === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={(props) => (
        <label className={styles.formControl + ' ' + styles.error}>
          <div className={styles.labelText}>{name}</div>
          <div className={styles.inputText}>
            <div className={styles.inputContainer}>
              <div className={styles.onIconEyes}>
                <div>
                  {type === 'password' && (
                    <Icon
                      icon={inputTypePas === 'password' ? eyeOff : eye}
                      onClick={handleToggle}
                      size={16}
                    />
                  )}
                  {/*{options ? (*/}
                  {/*  <select form="playerForm" {...register(name)}>*/}
                  {/*    {options &&*/}
                  {/*      options.map(*/}
                  {/*        (value: {*/}
                  {/*          value:*/}
                  {/*            | boolean*/}
                  {/*            | React.ReactChild*/}
                  {/*            | React.ReactFragment*/}
                  {/*            | React.ReactPortal*/}
                  {/*            | null*/}
                  {/*            | undefined*/}
                  {/*          label: any*/}
                  {/*        }) => (*/}
                  {/*          <option key={`${value.value}_${value.label}`}>*/}
                  {/*            {value.value}{' '}*/}
                  {/*          </option>*/}
                  {/*        )*/}
                  {/*      )}*/}
                  {/*  </select>*/}
                  {/*) : (*/}
                  <input
                    type={type}
                    value={props.field.value}
                    onChange={props.field.onChange}
                  />
                  {/*)}*/}
                </div>
              </div>
            </div>

            <span>
              {formState.touchedFields &&
                formState.errors[name] &&
                formState.errors[name].message}
            </span>
          </div>
        </label>
      )}
    />
  )
}
