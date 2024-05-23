import React from 'react'
import Product from './Product'
import {products} from '../data'
import  "./product.css"
function ProductList() {
  return (
    <>
    <nav>
      <a href="/">Agility Shop</a>
      <ul>
        <li><a href="/">phone</a></li>
        <li> <a href="/">Tablet</a></li>
        <li><a href="/">Smart Watch</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact us</a></li>
      </ul>
    </nav>
    <div className='productList'>
      {products.map(product => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
      </>
  )
}

export default ProductList;