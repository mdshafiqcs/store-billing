import React from 'react'
import { Navbar, Sidebar } from '../components'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='flex gap-2'>
        <Sidebar />
        <h1>HomePage</h1>
      </div>
    </div>
  )
}
