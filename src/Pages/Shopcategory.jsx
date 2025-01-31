import React,{useContext}from 'react'
import './CSS/Shopcategory.css'
import {Shopcontext} from '../context/Shopcontext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/item/item'
const Shopcategory = (props) => {
  const {all_product}= useContext(Shopcontext)
  console.log("All Products: ", all_product);
  return (
    <div className="shopcategory">
       <img className='shopcategory-banner' src={props.banner} alt=""/>
       <div className='shopcategory-indexsort'>
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          sort by<img src={dropdown_icon} alt=""/>
        </div>
       </div>
       <div className="shopcategory-products">
         {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
          }
          else{
            return null;  
          }
        })}
       </div>
       <div className="shopcategory-loadmore">
           Explore more
       </div>
    </div> 
  )
}
 
export default Shopcategory 