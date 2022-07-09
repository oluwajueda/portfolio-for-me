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

    <section className='introduction'>
        <div className='intro-name'>
<h1> Olamide
     <br/>
Osuolale 
<span>.</span>
</h1>
<div className='dash'></div>
  </div>
<button className='contact-btn'>contact me</button>
      
    <div>
        <img src='/photos/program-png.jpg' alt='program' />
    </div>

<div className='intro'>
    <h3>INTRODUCTION</h3>
   <h2> Front-end Web Developer</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex turpis, aliquam at nulla non, ultrices aliquam dolor.</p>
   <div className='intro-btn'>
<a href='/' className="btn-underline btn-intro"> Learn more &nbsp; 
<i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z">
    </path></svg></i></a>
   </div>
</div>

    </section>
  </section>
}

export default Navbar
