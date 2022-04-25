import React, { FC, useState } from 'react'

export interface IForm {
  TextField?: string
  MyCheckbox?: boolean
  handleSubmit?: any
  control?: any
  reset?: any
  name?: any
}

export const AuthForm: FC<IForm> = ({ name, handleSubmit, children }) => {
  const [text, setText] = useState('')

  return (
    <form>
      <label>{name}</label>
      <input
        name={name}
        value={text}
        // @ts-ignore
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
    </form>
  )
}
