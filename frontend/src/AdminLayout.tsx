import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/admin/Sidebar'

const AdminLayout = () => {
  return (
    <div className='bg-slate-800 w-full min-h-screen flex'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default AdminLayout