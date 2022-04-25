import { Controller, useFormContext } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

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
        <>
          <input
            type="text"
            value={props.field.value}
            onChange={props.field.onChange}
          />
          <span>
            {formState.errors[name] && formState.errors[name].message}
          </span>
        </>
      )}
    />
  )
}
