import './Select.scss'

import { CSSObject } from '@emotion/styled'
import React from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import ReactSelect, {
  GroupBase,
  OptionsOrGroups,
  PropsValue,
} from 'react-select'
import { OnChangeValue } from 'react-select/dist/declarations/src/types'

import { IAddPlayersForm, IOptionType } from '../../types/types'

export type isMultiType = true | false

type IProps = {
  options: OptionsOrGroups<IOptionType, GroupBase<IOptionType>> | undefined
  selectType?: '100' | '200'
  multi?: boolean
  // styles?: {
  //   option: (provided: CSSObject, state: { isSelected: number }) => CSSObject
  // }
  value?: PropsValue<IOptionType> | undefined
  // onBlur?: FocusEventHandler
  // onFocus?: FocusEventHandler
  onChange?: (newValue: OnChangeValue<IOptionType, boolean>) => void
  field?: ControllerRenderProps<IAddPlayersForm, 'team'>
}

const config: Record<'100' | '200', any> = {
  '100': {
    option: (styles: CSSObject, state: any) => {
      return {
        color: state.isFocused ? '#FFFFFF' : '#9C9C9C',
        padding: 6,
        paddingLeft: 12,
      }
    },
    multiValue: (styles: CSSObject) => {
      return {
        ...styles,
        background: '#E4163A',
        textColor: '#707070',
        fontWeight: 500,
        fontSize: 14,
      }
    },
    multiValueLabel: (styles: CSSObject) => {
      return {
        ...styles,
        color: '#FFFFFF',
      }
    },
    multiValueRemove: (styles: CSSObject) => {
      return {
        ...styles,
        color: '#FFFFFF',
      }
    },
    valueContainer: (provided: CSSObject) => ({
      ...provided,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      flexWrap: 'nowrap',
    }),
    input: (provided: CSSObject) => ({
      ...provided,
      minWidth: '3%',
    }),

    indicatorsContainer: (styles: CSSObject) => ({
      ...styles,
    }),
  },
  '200': {
    control: (styles: CSSObject) => ({
      ...styles,
      backgroundColors: ' #F6F6F6',
    }),
  },
}

export const SelectPlayer: React.FC<IProps> = ({
  options,
  field,
  multi,
  selectType = '100',
  value,
  onChange,
}) => {
  return (
    <ReactSelect
      {...field}
      classNamePrefix="custom-select-test"
      options={options}
      isMulti={multi}
      styles={config[selectType]}
      components={{ ClearIndicator: () => null }}
      value={value}
      onChange={onChange}
    />
  )
}
