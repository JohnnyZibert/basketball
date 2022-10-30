import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logoutSuccess } from '../../../Store/loginRequest/authLoginSlice'
import styles from './SignOutButton.module.scss'

export const SignOutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlerLogout = () => {
    dispatch(logoutSuccess())
    navigate('/login')
  }
  return (
    <>
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 0.0100098H20C21.1 0.0100098 22 0.91001 22 2.01001V15.99C22 17.09 21.1 17.99 20 17.99H1.98C0.89 17.99 0 17.1 0 16.01V13C0 12.45 0.45 12 1 12C1.55 12 2 12.45 2 13V15.02C2 15.57 2.45 16.02 3 16.02H19C19.55 16.02 20 15.57 20 15.02V2.99001C20 2.44001 19.55 1.99001 19 1.99001H3C2.45 1.99001 2 2.44001 2 2.99001V5.00001C2 5.55001 1.55 6.00001 1 6.00001C0.45 6.00001 0 5.55001 0 5.00001V2.01001C0 0.91001 0.9 0.0100098 2 0.0100098ZM13.64 9.36005L10.85 12.1501C10.54 12.4601 10 12.2401 10 11.7901V10.0001H1C0.45 10.0001 0 9.55005 0 9.00005C0 8.45005 0.45 8.00005 1 8.00005H10V6.21005C10 5.76005 10.54 5.54005 10.85 5.86005L13.64 8.65005C13.84 8.85005 13.84 9.16005 13.64 9.36005Z"
          fill="#FF768E"
        />
      </svg>
      <div className={styles.btnSignOut} onClick={handlerLogout}>
        Sign out
      </div>
    </>
  )
}
