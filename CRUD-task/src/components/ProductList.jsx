import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products, onEdit, onDelete}) => {
  return (
    <div className='product-grid'>
        {products.map((p) => (
            <ProductCard 
                key={p.id}
                product={p}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        ))}
    </div>
  )
}

export default ProductList
