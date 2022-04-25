import { FC, ReactNode } from 'react'

import styles from './button.module.css'

interface IProps {
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
}

export const NewButton: FC<IProps> = ({
  children,
  type = 'button',
  onClick,
  ...rest
}) => {
  return (
    <button className={styles.button} {...rest} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
