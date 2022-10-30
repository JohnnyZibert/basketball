import './Select.scss'

import React, { FocusEventHandler } from 'react'
import { Controller } from 'react-hook-form'
import { Control } from 'react-hook-form/dist/types'
import ReactSelect from 'react-select'
import { OnChangeValue } from 'react-select/dist/declarations/src/types'

import {
  IAddPlayersForm,
  IOptionType,
} from '../../Elements/Page/HomePage/AddNewPlayersPage/AddNewPlayersPage'

export type isMultiType = true | false

interface IProps {
  options: IOptionType[]
  control?: Control<IAddPlayersForm> | undefined
  labelName?: string
  selectType?: '100' | '200'
  selectName:
    | 'number'
    | 'name'
    | 'position'
    | 'team'
    | 'birthday'
    | 'height'
    | 'weight'
    | 'avatarUrl'
  multi?: boolean
  styles?: { option: (provided: any, state: { isSelected: number }) => any }
  value?: IOptionType[]
  onBlur?: FocusEventHandler
  onFocus?: FocusEventHandler
  onChange?: (newValue: OnChangeValue<IOptionType, boolean>) => void
}

const config: Record<'100' | '200', any> = {
  '100': {
    multiValue: (styles: any) => {
      return {
        ...styles,
        background: '#E4163A',
        textColor: '#707070',
        fontWeight: 500,
        fontSize: 14,
      }
    },
    multiValueLabel: (styles: any) => {
      return {
        ...styles,
        color: '#FFFFFF',
      }
    },
    multiValueRemove: (styles: any) => {
      return {
        ...styles,
        color: '#FFFFFF',
      }
    },
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      flexWrap: 'nowrap',
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      minWidth: '3%',
    }),

    indicatorsContainer: (styles: any) => ({
      ...styles,
    }),
    // control: (styles: any) => ({
    //   ...styles,
    //   backgroundColor: 'red',
    // }),
    // singleValue: (provided: any, state: { isDisabled: any }) => {
    //   const opacity = state.isDisabled ? 0.5 : 1
    //   const transition = 'opacity 300ms'
    //   const backgroundColor = '#E4163A'
    //   return { ...provided, opacity, transition, backgroundColor }
    // },
  },
  '200': {
    // option: (styles: any, state: { isSelected: any }) => ({
    //   ...styles,
    //   borderRadius: 4,
    //   color: state.isSelected ? '#FFFFFF' : '#9C9C9C',
    // }),
    control: (styles: any) => ({
      ...styles,
      backgroundColors: ' #F6F6F6',
    }),
  },
}

export const SelectPlayer: React.FC<IProps> = ({
  labelName,
  options,
  control,
  selectName,
  multi,
  selectType = '100',
  value,
  onBlur,
  onFocus,
  onChange,
}) => {
  return (
    <section>
      <label>{labelName}</label>
      <Controller
        render={({ field }) => (
          <ReactSelect
            {...field}
            classNamePrefix="custom-select-test"
            options={options}
            isClearable
            onFocus={onFocus}
            onBlur={onBlur}
            isMulti={multi}
            styles={config[selectType]}
            components={{ ClearIndicator: () => null }}
            value={value}
            onChange={onChange}
          />
        )}
        name={selectName}
        control={control}
      />
    </section>
  )
}
