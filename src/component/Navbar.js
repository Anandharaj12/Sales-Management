import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './Auth';



export const Navbar = () => {
  const auth=useAuth()
  return (

    <div>
      

      
        <nav className='navbar'>
          
      
        <h2>Sales Management System</h2>   
        <NavLink to='/'>Home</NavLink>
        
        
        {auth.user==='admin'&&
        <NavLink to='/admin'>Admin</NavLink>}
        <NavLink to='/users'>User</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}

