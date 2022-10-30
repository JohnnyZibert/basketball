import React, { ReactElement, SVGProps } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { Icon } from 'react-icons-kit'

import styles from './formInput.module.scss'

export const FormInput = ({
  name,
  rules,
  type = 'text',
  label,
  onEyeClick,
  iconInput,
}: {
  name: string
  rules?: RegisterOptions
  type?: string
  onEyeClick?: () => void
  label?: string
  iconInput?: (props: SVGProps<SVGElement>) => ReactElement
}) => {
  const { control, formState } = useFormContext()

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      defaultValue=""
      render={(props) => (
        <label className={styles.formControl + ' ' + styles.error}>
          <div className={styles.labelText}>{label}</div>
          <div className={styles.inputText}>
            <div className={styles.inputContainer}>
              <div className={styles.onIconEyes}>
                <div>
                  {iconInput && (
                    <Icon icon={iconInput} onClick={onEyeClick} size={16} />
                  )}
                  <input
                    type={type}
                    value={props.field.value}
                    onChange={props.field.onChange}
                    placeholder={''}
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
