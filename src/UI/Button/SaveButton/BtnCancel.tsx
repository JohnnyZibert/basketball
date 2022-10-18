import { FC, ReactNode } from 'react'

import styles from './BtnCancel.module.scss'

interface IProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
}

export const BtnCancel: FC<IProps> = ({
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
