import React from 'react'
import {Link} from 'react-router-dom' ;
function Navbar() {
  return (
    <div> 
        <nav className='flex space justify-end item-center space-x-3 h-16  px-8 p-4 bg-blue-200 fixed z-50 w-full'>
             <Link to='/'> navbar</Link>
             <Link to='/about'>About</Link>
             <Link to='/contact'>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar