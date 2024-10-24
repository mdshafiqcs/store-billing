import React from 'react'
import { Navbar, Sidebar } from '../components'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import DashboardPage from './DashboardPage'

export default function HomePage() {
  return (
    <div>
      <Navbar />
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
