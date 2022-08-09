import React from 'react'
import{FaWordpress, FaWix, FaReact} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io'
import {SiRedux} from 'react-icons/si'
import {TbBrandTailwind} from 'react-icons/tb'

const Service = () => {
  return <section id='skills' className='second-part'>
    <div className='first-div'>
    <h3>SKILLS</h3>
    <h2>What I AM Great At</h2>
    <div className='p-div'>
    <p>I am a passionate front-end developer with experience developing and maintaining web applications using Javascript, React JS, Redux and other latest front-end frameworks</p>
         </div>
      </div>  
      <div className='box-container'>
      <div className='service-box'>
       <IoLogoJavascript className='service-logo'/>
        <h3>Javascript</h3>
        </div>
      <div className='service-box'>
         <FaReact className='service-logo wp-logo'/>
        <h3>React JS</h3>
        </div>
      <div className='service-box'>
  
        <SiRedux className='service-logo'/>
        <h3>Redux</h3>
        </div>
      <div className='service-box'>
  
        <TbBrandTailwind className='service-logo wp-logo'/>
        <h3>Tailwind CSS</h3>
        </div>
      </div>
  </section>
  
}

export default Service
