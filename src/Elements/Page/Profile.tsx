import { Link } from 'react-router-dom'

import TestForm from './testForm/testForm'

const UserProfilePage = () => {
  return (
    <div>
      <TestForm />
      <button>
        {' '}
        <Link to={'/profile'}>Profile</Link>
      </button>
    </div>
  )
}

export default UserProfilePage
