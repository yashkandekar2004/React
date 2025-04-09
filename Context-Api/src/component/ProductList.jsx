import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1, name: 'Samsung Galaxy s24 ', price: 90000, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSg3_vUetPjZvlJFJUTbrPndhh9mrgZAJYzyr31ImT8Uc-luKfp9P7QFCk_RIpxut89h21nHHE3QmdUBmR_Fq9m16_3ZhOX3KaUl2WhSx-gunQlog_5vTn3_A' },
  { id: 2, name: 'Bluetooth Speaker', price: 2999, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQj2F8HowaMSztuQ0ES1lBAjhUQCVz0z0k2NqDn4I5hWdaf_qB49ZqYrmJop7l9uatL6QDx8R7UBqKhKx_kEF2YiIquVtfWGy2aT4qRnFMJPz7jW13d6GiJWGA' },
  { id: 3, name: 'Wireless Headphones', price: 4999, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ43uPxiIkFicrZUTKAyC4k_RDfJ2ZKGMtqUrX_eaA-nV21U7ryL-AGI6O7CJlp-aFS-9ZQ1g99C1aRu_rOuwDkrxoOI9qhVthtmV5guzneWJq_Wnngpf-KFQ' },
  { id: 4, name: 'Smartwatch', price: 9999, image: 'https://images.meesho.com/images/products/270666709/1mxgu_1200.jpg' },
  { id: 5, name: 'Laptop', price: 59999, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJsQJvGj7Ug3N2HhLc3qfXwnCKFjvc4BJKoClq4u-hmcyPwDxlx-xYuyxnCfWTDBywum4j8IdFKkai8O6L4Dvl3PZYzL2jDIzLGPpl27Vc-oXj3XqkI12a' },
  { id: 6, name: 'Samsung Galaxy s24 ', price: 90000, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSg3_vUetPjZvlJFJUTbrPndhh9mrgZAJYzyr31ImT8Uc-luKfp9P7QFCk_RIpxut89h21nHHE3QmdUBmR_Fq9m16_3ZhOX3KaUl2WhSx-gunQlog_5vTn3_A' },
  { id: 7, name: 'Bluetooth Speaker', price: 2999, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQj2F8HowaMSztuQ0ES1lBAjhUQCVz0z0k2NqDn4I5hWdaf_qB49ZqYrmJop7l9uatL6QDx8R7UBqKhKx_kEF2YiIquVtfWGy2aT4qRnFMJPz7jW13d6GiJWGA' },
  { id: 8, name: 'Wireless Headphones', price: 4999, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ43uPxiIkFicrZUTKAyC4k_RDfJ2ZKGMtqUrX_eaA-nV21U7ryL-AGI6O7CJlp-aFS-9ZQ1g99C1aRu_rOuwDkrxoOI9qhVthtmV5guzneWJq_Wnngpf-KFQ' },
  { id: 9, name: 'Smartwatch', price: 9999, image: 'https://images.meesho.com/images/products/270666709/1mxgu_1200.jpg' },
  { id: 10, name: 'Laptop', price: 59999, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJsQJvGj7Ug3N2HhLc3qfXwnCKFjvc4BJKoClq4u-hmcyPwDxlx-xYuyxnCfWTDBywum4j8IdFKkai8O6L4Dvl3PZYzL2jDIzLGPpl27Vc-oXj3XqkI12a' },
  { id: 11, name: 'Samsung Galaxy s24 ', price: 90000, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSg3_vUetPjZvlJFJUTbrPndhh9mrgZAJYzyr31ImT8Uc-luKfp9P7QFCk_RIpxut89h21nHHE3QmdUBmR_Fq9m16_3ZhOX3KaUl2WhSx-gunQlog_5vTn3_A' },
  { id: 12, name: 'Bluetooth Speaker', price: 2999, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQj2F8HowaMSztuQ0ES1lBAjhUQCVz0z0k2NqDn4I5hWdaf_qB49ZqYrmJop7l9uatL6QDx8R7UBqKhKx_kEF2YiIquVtfWGy2aT4qRnFMJPz7jW13d6GiJWGA' },
  { id: 13, name: 'Wireless Headphones', price: 4999, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ43uPxiIkFicrZUTKAyC4k_RDfJ2ZKGMtqUrX_eaA-nV21U7ryL-AGI6O7CJlp-aFS-9ZQ1g99C1aRu_rOuwDkrxoOI9qhVthtmV5guzneWJq_Wnngpf-KFQ' },
  { id: 14, name: 'Smartwatch', price: 9999, image: 'https://images.meesho.com/images/products/270666709/1mxgu_1200.jpg' },
  { id: 15, name: 'Laptop', price: 59999, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJsQJvGj7Ug3N2HhLc3qfXwnCKFjvc4BJKoClq4u-hmcyPwDxlx-xYuyxnCfWTDBywum4j8IdFKkai8O6L4Dvl3PZYzL2jDIzLGPpl27Vc-oXj3XqkI12a' }

]

function ProductList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
