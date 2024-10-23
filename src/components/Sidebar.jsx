import { PackageSearch } from 'lucide-react'
import { Box } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='h-[100vh] border-r border-slate-200 min-w-[200px]'>
      <nav className='flex flex-col gap-1'>
        <NavLink to="/" className={({isActive}) => (`flex gap-2.5 px-4 py-2.5 cursor-pointer hover:bg-slate-100 transition ${isActive ? "bg-slate-100 border-r-[4px] border-blue-500" : ""}`)}>
          <LayoutDashboard /> 
          <div>Dashboard</div>
        </NavLink>
        <NavLink to="/products" className={({isActive}) => (`flex gap-2.5 px-4 py-2.5 cursor-pointer hover:bg-slate-100 transition ${isActive ? "bg-slate-100 border-r-[4px] border-blue-500" : ""}`)}>
          <Box /> 
          <div>Products</div>
        </NavLink>
        <NavLink to="/sale" className={({isActive}) => (`flex gap-2.5 px-4 py-2.5 cursor-pointer hover:bg-slate-100 transition ${isActive ? "bg-slate-100 border-r-[4px] border-blue-500" : ""}`)}>
          <ShoppingCart /> 
          <div>Sale</div>
        </NavLink>
      </nav>
    </div>
  )
}
