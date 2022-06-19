import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const PlayersPage = () => {
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
