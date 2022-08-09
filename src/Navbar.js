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
          <div className={`${showLinks?'links-container show-container':'links-container'}`}>
        <ul className='menu-nav' >
            
            <li><a className='nav-link' href='#first'>Home</a></li>
            <li><a  className='nav-link' href='#skills'>Services</a></li>
            <li><a  className='nav-link'  href='#portfolio'>Portfolio</a></li>
            <li><a  className='nav-link' href='#contact'>Contact</a></li>
             
    
        </ul>
 
       </div>
         
        

    </nav>

   
  </section>
}

export default Navbar
