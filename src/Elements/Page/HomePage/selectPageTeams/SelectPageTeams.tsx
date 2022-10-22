import './SelectPageTeams.scss'

import React, { useState } from 'react'
import Select from 'react-select'

import { setCountItem } from '../../../../Store/getTeams/TeamsSlice'
import { useAppDispatch } from '../../../../Store/store'

interface IProps {
  multi?: boolean
  size?: number
  onChangeSize: (newValue: { value: string }) => void
}

const options = [
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
  const [currentPage] = useState('6')
  const dispatch = useAppDispatch()
  const getValue = () => {
    return currentPage
      ? options.find((page) => page.value === String(size))
      : '6'
  }

  // const onChange = (newValue: { value: string }) => {
  //   dispatch(setCountItem(Number(newValue.value)))
  //   console.log(newValue.value)
  // }
  return (
    <Select
      classNamePrefix="custom-select"
      value={getValue()}
      // @ts-ignore
      onChange={onChangeSize}
      options={options}
      menuPlacement={'top'}
      isMulti={multi}
    />
  )
}
