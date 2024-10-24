
import React from 'react'
import LogoutButton from './LogoutButton';

export default function DashboardNavbar() {
  

  return (
    <div className=' bg-white border-b border-slate-200 shadow'>
      <div className="mx-20 flex justify-between items-center py-4">
        <div className="font-bold text-2xl text-slate-600 cursor-pointer">Store<span className="text-blue-500">X</span> </div>
        <LogoutButton />
        
      </div>
    </div>
  )
}
