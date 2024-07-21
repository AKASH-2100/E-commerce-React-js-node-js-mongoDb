import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcumbs/Breadcrumbs'
const Product = () => {
  const all_product=useContext(Shopcontext)
  const productId =useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
       <Breadcrumbs product={product}/>
    </div>
  )
}

export default Product