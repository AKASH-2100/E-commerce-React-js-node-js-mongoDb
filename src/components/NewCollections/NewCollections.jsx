import React from 'react'
import './NewCollections.css'
import newcollection from '../Assets/new_collections'
import Item from '../item/item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <div className='a'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        </div>
        <div className='collections' >
          {newcollection.map((item,i)=>(
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          ))}
        </div>
    </div>
  )
}

export default NewCollections