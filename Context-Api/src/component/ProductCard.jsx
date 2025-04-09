import React, { useContext } from 'react'
import { countContext } from '../Parent'
import './ProductCard.css'

function ProductCard({ product }) {
  const { setCount } = useContext(countContext)

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Add To Cart
      </button>
    </div>
  )
}

export default ProductCard
