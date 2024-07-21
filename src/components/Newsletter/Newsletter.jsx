import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>subscribe to our newsletter and stay updated</p>
        <div className='input'>
        <input type="text" placeholder='Your Email Id'/>
        <button>subscribe</button>
        </div>   
    </div>
  )
}

export default Newsletter