import classNames from 'classnames'
import React, { HTMLInputTypeAttribute, useState } from 'react'
import { Controller, FieldValues, useFormContext } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'

import styles from './formInput.module.scss'

const cx = classNames.bind(styles)

export const FormInput = ({
  name,
  rules,
  type = 'text',
}: {
  name: string
  rules?: RegisterOptions
  type?: string
  onEyeClick?: () => void
  eyeIcon?: string
}) => {
  const { control, formState } = useFormContext()
  const [inputTypePas, setType] = useState('password')

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
                  <input
                    type={type}
                    value={props.field.value}
                    onChange={props.field.onChange}
                  />
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
