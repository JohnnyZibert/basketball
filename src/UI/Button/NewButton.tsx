import { FC, ReactNode } from 'react'

import styles from './button.module.css'

interface IProps {
  onClick?: () => void
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
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99998 5.66659H5.66665V8.99992C5.66665 9.36659 5.36665 9.66659 4.99998 9.66659C4.63331 9.66659 4.33331 9.36659 4.33331 8.99992V5.66659H0.99998C0.633313 5.66659 0.333313 5.36659 0.333313 4.99992C0.333313 4.63325 0.633313 4.33325 0.99998 4.33325H4.33331V0.999919C4.33331 0.633252 4.63331 0.333252 4.99998 0.333252C5.36665 0.333252 5.66665 0.633252 5.66665 0.999919V4.33325H8.99998C9.36665 4.33325 9.66665 4.63325 9.66665 4.99992C9.66665 5.36659 9.36665 5.66659 8.99998 5.66659Z"
          fill="white"
        />
      </svg>
    </button>
  )
}
