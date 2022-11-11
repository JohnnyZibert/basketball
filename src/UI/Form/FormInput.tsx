import React, { ReactElement, SVGProps } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { Icon } from 'react-icons-kit'

import styles from './FormInput.module.scss'

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
  className?: string | undefined
  id?: string | undefined
}) => {
  const { control, formState } = useFormContext()
  // const [valueInput, setValueInput] = useState<string>()

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
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
                    // value={valueInput}
                    value={props.field.value}
                    // onChange={(event) => setValueInput(event.target.value)}
                    onChange={props.field.onChange}
                    placeholder={''}
                    // defaultValue={props.field.value}
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
