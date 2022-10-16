import React from 'react'
import { Controller } from 'react-hook-form'
import { Control } from 'react-hook-form/dist/types'
import ReactSelect from 'react-select'

import {
  IAddPlayersForm,
  IOptionType,
} from '../../Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
import styles from './TestSelect.module.scss'

interface IProps {
  options: IOptionType[]
  control?: Control<IAddPlayersForm, any> | undefined
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
  styles?: { option: (provided: any, state: { isSelected: any }) => any }
}
const config: Record<'100' | '200', any> = {
  '100': {
    option: (
      provided: any,
      state: { isSelected: any; isFocused: boolean }
    ) => ({
      ...provided,
      color: state.isFocused ? '#FFFFFF' : '#9C9C9C',
      background: state.isFocused && '#C60E2E',
    }),

    multiValue: (styles: any) => {
      return {
        ...styles,
        background: '#FF5761',
        textColor: '#707070',
        fontFamily: 'Avenir Next Cyr Light',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 24,
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
      width: 325,
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
    placeholder: (styles: any) => ({
      ...styles,
      backgroundColor: '#FFFFFF',
      fontFamily: 'Avenir',
      fontSize: 14,
    }),
  },
}

export const TestSelect: React.FC<IProps> = ({
  labelName,
  options,
  control,
  selectName,
  multi,
  selectType = '100',
}) => {
  return (
    <section>
      <label>{labelName}</label>
      <Controller
        render={({ field }) => (
          <ReactSelect
            {...field}
            // @ts-ignore
            options={options}
            isClearable
            isMulti={multi}
            styles={config[selectType]}
            components={{ ClearIndicator: () => null }}
          />
        )}
        name={selectName}
        control={control}
      />
    </section>
  )
}
