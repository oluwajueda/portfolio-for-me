import React from 'react'
import data from './data'


const Portfolio = () => {
  return<section id='portfolio' className='third-part'>
    <div className='third-part-div'>
  <h3>PORTFOLIO</h3>
    <h2>My React & Javascript Projects</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque risus, facilisis at elementum non,
         vulputate sed lorem. Mauris vel turpis maximus, porttitor dui in,
         vehicula diam. Morbi vel dolor id nunc fringilla maximus. 
         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
  <div className='portfolio-map'>
 {
   data.map((data)=>{
    const {id, text, name } = data

    return<div key={id} className='portfolio-section'>
        <div className='portfolio-sect'>
        <img src='/photos/quiz-image.jpg' alt='name'/>
        <h4>{name}</h4>
        <p className='portfolio-text'>{text}</p>
</div>
    </div>
   })
 }
</div>
  </section>
}

export default Portfolio
