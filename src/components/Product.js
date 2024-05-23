/* import React from 'react';
import "./product.css"
/* import { products } from '../data'; */
 const ProductsCart = ({product, addToCart}) => {
  return(
    <div className="product">
      <img src={product.thumbnail} alt={product.name}/>
      <h3>{product.name}</h3>
      <span id="price">$ {product.price}</span>
      <span id="description">{product.description}</span>
<button  onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  )
};
export default ProductsCart;
