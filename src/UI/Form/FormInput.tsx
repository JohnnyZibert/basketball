import React, { ReactElement, SVGProps, useEffect, useState } from 'react'
import { Controller, useForm, useFormContext } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { Icon } from 'react-icons-kit'
import { useSelector } from 'react-redux'

import { selectGetTeams } from '../../Store/getTeams/Selectors'
import { ITeam, IUserForm } from '../../types/types'
import styles from './formInput.module.scss'

export const FormInput = ({
  name,
  rules,
  type = 'text',
  label,
  onEyeClick,
  iconInput,
  className,
  id,
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
  const { teams } = useSelector(selectGetTeams)
  const methods = useForm({
    defaultValues: {
      teamInfo: {
        name: '',
        foundationYear: 0,
        division: '',
        conference: '',
        imageUrl: '',
      },
    },
  })
  const { setValue } = methods
  // const [user, setUser] = useState()
  const { control, formState } = useFormContext()
  // const fields: string[] = ["name", 'foundationYear', 'division', 'conference', 'imageUrl']
  // teams.data.forEach((team: ITeam, index: number, array: ITeam[]) => setValue(team, user?[team]))
  // // setUser(user)

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
                    value={props.field.value}
                    onChange={props.field.onChange}
                    placeholder={''}
                    defaultValue={props.field.value}
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
