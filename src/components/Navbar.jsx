import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <header className="header">
        <NavLink to="/" className = "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">AK</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-500  bg-white rounded-lg shadow-md p-1' : 'text-black shadow-md  bg-white rounded-lg p-1'}>
            Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500  bg-white rounded-lg shadow-md p-1' : 'text-black shadow-md  bg-white rounded-lg p-1'}>
            About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500  bg-white rounded-lg shadow-md p-1' : 'text-black shadow-md  bg-white rounded-lg p-1'}>
            Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500  bg-white rounded-lg shadow-md p-1' : 'text-black shadow-md  bg-white rounded-lg p-1'}>
            Contact
            </NavLink>
        </nav>
     </header>
    </div>
  )
}

export default Navbar
