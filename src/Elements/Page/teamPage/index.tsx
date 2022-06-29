import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppDispatch } from '../../../Store/store'
import { getTeamsRequest } from '../../../Store/teamsItem/AsyncActionTeams'

const Teams = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [])

  return (
    <div>
      <Link to={'/home'}>
        <button>
          <span>Back to home</span>
        </button>
      </Link>
    </div>
  )
}
export default Teams
