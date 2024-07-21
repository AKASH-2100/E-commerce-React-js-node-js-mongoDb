import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
            <img src={logo} alt="logo"/>
            <h1>SHOPPER</h1>
        </div>
        <div className='footer2'>
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='footer3'>
            <img src={insta} alt="insta"/>
            <img src={pin} alt="insta"/>
            <img src={whatsapp} alt="insta"/>
        </div>
        <div className='footer4'>
            <hr/>
            <p>Copyright @2024 -All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer