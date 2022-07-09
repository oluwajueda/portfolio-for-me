import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false)

    
    
  return <section id='first' className='nav-container'>
    <nav className='logo-link' >
        <div className='logo-navbar'>
        <div>
            <h1 className='logo'>Ibuild<span>.</span></h1>
        </div>

        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
         </div>
         {
            showLinks && <div className='links-container show-container'>
        <ul className='menu-nav' >
            
            <li><a href='#first'>Home</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a  href='#portfolio'>Portfolio</a></li>
            <li><a  href='#contact'>Contact</a></li>
             
    
        </ul>
 
       </div>
         }
        

    </nav>

   
  </section>
}

export default Navbar
