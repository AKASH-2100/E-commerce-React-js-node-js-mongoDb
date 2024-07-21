import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrumbs = (props) => {
  return (
    <div className='breadcrum'>
        HOME<img src={arrow_icon} alt=""/> SHOP<img src={arrow_icon} alt=""/> {props.id}<img src={arrow_icon} alt=""/>
    </div>
  )
}

export default Breadcrumbs