import React from 'react'
import{FaWordpress, FaWix} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'

const Service = () => {
  return <section id='services' className='second-part'>
    <div className='first-div'>
    <h3>SERVICES</h3>
    <h2>What I AM Great At</h2>
    <div className='p-div'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque risus, facilisis at elementum non,
         vulputate sed lorem. Mauris vel turpis maximus, porttitor dui in,
         vehicula diam. Morbi vel dolor id nunc fringilla maximus. 
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
         </div>
      </div>  
      <div className='box-container'>
      <div className='service-box'>
       <BsCodeSlash className='service-logo'/>
        <h3>Web Development</h3>
        </div>
      <div className='service-box'>
         <FaWordpress className='service-logo wp-logo'/>
        <h3>WordPress Design</h3>
        </div>
      <div className='service-box'>
  
        <FaWix className='service-logo'/>
        <h3>Wix Design</h3>
        </div>
      </div>
  </section>
  
}

export default Service
