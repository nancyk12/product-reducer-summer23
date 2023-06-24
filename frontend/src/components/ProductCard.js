import React from 'react'
const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <h2><u>{props.title}</u></h2>
      <p>Publisher: {props.publisher}</p>
      <p>Genre: {props.genre}</p>
      <p>Price: ${props.price}</p>

      <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
    </div>
  )
}

export default ProductCard;
