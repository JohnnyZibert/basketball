import './SelectPageTeams.scss'

import React, { SetStateAction, useEffect, useState } from 'react'
import Select from 'react-select'

import { getTeamsRequest } from '../../../../../Store/getTeams/AsyncActionTeams'
import { useAppDispatch } from '../../../../../Store/store'
import { IOption } from '../../../../../UI/MultiSelect/interfaceSelect'

interface IProps {
  multi?: boolean
}

const options: IOption[] = [
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

export const SelectPageTeams: React.FC<IProps> = ({ multi }) => {
  const [currentPage, setCurrentPage] = useState('')
  const getValue = () => {
    return currentPage ? options.find((page) => page.value === currentPage) : ''
  }

  const onChange = (newValue: { value: SetStateAction<string> }) => {
    setCurrentPage(newValue.value)
  }
  return (
    <Select
      classNamePrefix="custom-select"
      value={getValue()}
      // @ts-ignore
      onChange={onChange}
      options={options}
      menuPlacement={'top'}
      isMulti={multi}
    />
  )
}
