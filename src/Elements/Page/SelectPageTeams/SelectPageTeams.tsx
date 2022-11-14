import './SelectPageTeams.scss'

import { CSSObject } from '@emotion/styled'
import React from 'react'
import Select from 'react-select'

import { IOptionPageSize } from '../../../types/types'

interface IProps {
  multi?: boolean
  size?: number
  onChangeSize: (value: string) => void
}

const options: IOptionPageSize[] = [
  {
    value: '6',
    label: '6',
  },
  {
    value: '12',
    label: '12',
  },
  {
    value: '24',
    label: '24',
  },
]

export const SelectPageTeams: React.FC<IProps> = ({
  multi,
  size,
  onChangeSize,
}) => {
  const getValue = () => {
    return size ? options.find((option) => option.label === String(size)) : '6'
  }

  const customStyles = {
    option: (
      provided: CSSObject,
      state: { isSelected: boolean; isFocused: boolean }
    ) => ({
      ...provided,
      color: state.isFocused ? '#FFFFFF' : '#9C9C9C',
      background: state.isFocused ? '#C60E2E' : '#FFFFFF',
    }),
  }
  return (
    <Select
      classNamePrefix="custom-select-player"
      value={getValue()}
      onChange={(newValue: any) => {
        if (typeof newValue === 'string') {
          onChangeSize(newValue)
        } else if (newValue?.value) {
          onChangeSize(newValue.value)
        }
      }}
      options={options}
      menuPlacement={'top'}
      isMulti={multi}
      styles={customStyles}
    />
  )
}
