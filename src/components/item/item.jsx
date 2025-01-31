import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/Product/${props.id}`}><img src={props.image} alt="loading"/></Link>
        <p>{props.name}</p>
        <div className='itemprice'>
            <div className='itemprice_new'>
                ${props.new_price}
            </div>
            <div className='itemprice_old'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item