import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {

    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

    const openNavMenu = () =>{
        setIsNavMenuOpen(true)
    }
    const closeNavMenu =() =>{
        setIsNavMenuOpen(false)
    }
  return <section id='first' className='nav-container'>
    <nav className='navbar'>
        <div>
            <h1 className='logo'>Ibuild<span>.</span></h1>
        </div>
        <ul className='nav-menu'>
            
            <li><a href='#first'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a  href='#portfolio'>Portfolio</a></li>
            <li><a  href='#contact'>Contact</a></li>
             
    
        </ul>
 <button className='sidebar-toggle'><FaBars/></button>
       

    </nav>

   
  </section>
}

export default Navbar
