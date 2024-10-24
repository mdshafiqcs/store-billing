import React from 'react'
import { DashboardNavbar, Sidebar } from '../components'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default function DashboardPage() {
  return (
    <div>
      <DashboardNavbar />
      <div className='flex gap-2'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<DashboardPage />}>
          
          </Route>
        </Routes>
      </div>
    </div>
  )
}
