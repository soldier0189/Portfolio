import React from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css"
const Navbar = () => {
  return (
     <nav className='navbar container'>
        <div className="nav-left">
             <h4>Raghvendra Singh </h4>
        </div>
        <div className="nav-right">
             <ul>
                <Link className='list' to='about' smooth={true} duration={500}>About</Link>
                <Link className='list' to='skills' smooth={true} duration={500}>Skills</Link>
                <Link className='list' to='project' smooth={true} duration={500}>Projects</Link>
   
                <Link className='list' to='contact' smooth={true} duration={500}>Contact</Link>
             </ul>
        </div>
      
     </nav>
  )
}

export default Navbar