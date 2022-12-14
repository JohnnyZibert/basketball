import { FC, ReactNode } from 'react'

import styles from './BtnSave.module.css'

interface IProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
}

export const BtnSave: FC<IProps> = ({
  children,
  type = 'button',
  onClick,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={styles.button}
      {...rest}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
