import React from 'react'
import './Realted.css'
import data_product from '../assets/data'
import Item from '../items/Item'


const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>

        <h1>Related Products</h1>
        <hr />
        <div className='relatedproducts-items'>
        {data_product.map((item, index)=>{
        return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

        })}
        </div>
    </div>
  )
}

export default RelatedProduct