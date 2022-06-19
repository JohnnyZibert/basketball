import classNames from 'classnames'
import { Controller, useFormContext } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

import styles from './formInput.module.css'

const cx = classNames.bind(styles)

export const FormInput = ({
  name,
  rules,
}: {
  name: string
  rules?: RegisterOptions
}) => {
  const { control, formState } = useFormContext()

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={(props) => (
        <label className={styles.formControl + ' ' + styles.error}>
          {name}
          <input
            type="text"
            value={props.field.value}
            onChange={props.field.onChange}
          />
          <span>
            {formState.touchedFields &&
              formState.errors[name] &&
              formState.errors[name].message}
          </span>
        </label>
      )}
    />
  )
}
