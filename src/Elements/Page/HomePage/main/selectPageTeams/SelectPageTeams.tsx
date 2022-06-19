import './SelectPageTeams.scss'

import { SetStateAction, useState } from 'react'
import Select from 'react-select'

import { IOption } from '../../../../../UI/MultiSelect/interfaceSelect'

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

export const SelectPageTeams = () => {
  const [currentPage, setCurrentPage] = useState('6')
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
    />
  )
}
