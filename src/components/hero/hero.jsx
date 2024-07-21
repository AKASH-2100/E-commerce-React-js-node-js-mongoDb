import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const hero = () => {
  return (
    <div className='hero'>
       <div className='hero-left'>
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className='hand_icon'>
             <p>new</p>
             <img src={hand_icon} alt="hand"/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className='latest_collection_btn'>
                <div>Latest collection</div>
                <img src={arrow_icon} alt="arrow"/>
          </div>
       </div>
       <div className='hero-right'>
             <img src={hero_image} alt="right"/>
       </div>

    </div>
  )
}
export default hero