import React from 'react'

const Footer = () => {

    const goUp = () =>{
        window.scrollTo({
      left: 0,
      top: 0,
    });
    }
  return<> <section id='contact' className='fourth-part'>
      <div className='fourth-part-div'>
        <h3>CONTACT US</h3>
        <h2>Ways To Contact Me</h2>
        <p>Kindly reach out to me via any of these means, I am available any time for work. Thanks</p>
      </div>
    <div className='scroll-div'>
      <div className='socials-div'>
        <div className='socials'><a href='mailto:oluwajuedalo@gmail.com?'>Send Me Email</a></div>
        <div  className='socials'><a href='https://twitter.com/Oluwajueda_Lo?t=_6Ogi0CnWxn8zsEHNKvKvg&s=09'>Twitter</a></div>
        <div  className='socials'><a href='tel: +234-814-2577-499'>Call Me</a></div>
      </div>
      <div class="back-to-top"><a href={URL} onClick={goUp}><i><svg stroke="currentColor" fill="currentColor" 
      stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" 
      xmlns="http://www.w3.org/2000/svg">
        <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg></i></a></div>
      
      </div>
     
    </section>
    <div>
         <div className='horizontal-footer'></div>
      <div className='copyright'>
      <p>Copyright - Ibuild | All Rights Reserved</p>
      </div>
    </div>
    </>

}

export default Footer
