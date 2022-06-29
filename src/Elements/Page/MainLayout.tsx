import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './HomePage/header/Header'

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
export default MainLayout
