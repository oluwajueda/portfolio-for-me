import React from 'react'
import data from './data'
import {MdLaunch} from 'react-icons/md'


const Portfolio = () => {
  return<section id='portfolio' className='third-part'>
    <div className='third-part-div'>
  <h3>PORTFOLIO</h3>
    <h2>My React & Javascript Projects</h2>
    {/* <div className='react-p'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque risus, facilisis at elementum non,
         vulputate sed lorem. Mauris vel turpis maximus, porttitor dui in,
         vehicula diam. Morbi vel dolor id nunc fringilla maximus. 
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
         </div> */}
    </div>
  <div className='portfolio-map'>
 {
   data.map((data)=>{
    const {id, text, name,image,website } = data

    return<div key={id} className='portfolio-section'>
        
        <img className='image-port' src={image} alt='name'/>
        <div className='name'>
        <h4 className='project-name'>{name}</h4>
        </div>
        <p className='portfolio-text'>{text}</p>
       <a href={website} ><p className='visit'>visit<MdLaunch  className='launch' /></p></a>

    </div>
   })
 }
</div>
  </section>
}

export default Portfolio
