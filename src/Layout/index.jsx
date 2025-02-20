import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'

const Layout = () => {
  return (
    <div className='app-wrapper'>
      <TopNav />
          <Outlet />
    </div>
  )
}

export default Layout