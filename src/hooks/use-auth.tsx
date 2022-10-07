import { useSelector } from 'react-redux'

import { getToken } from '../Store/requests/authLoginRequest'
import { RootState } from '../Store/store'

export function useAuth() {
  const { token, avatarUrl, name } = useSelector(
    (state: RootState) => state.authLogin.userData
  )
  console.log(name)
  return {
    isAuth: !name,
    name,
    token,
    avatarUrl,
  }
}
