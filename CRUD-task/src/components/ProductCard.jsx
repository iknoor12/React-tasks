import React from 'react'

const ProductCard = ({product, onEdit, onDelete}) => {
    const imgSrc = product?.image || "https://via.placeholder.com/180?text=No+Image";
    const title = product?.title || "Untitled Product";
    const price = product?.price ?? "N/A";
    const category = product?.category || "N/A";
    const description = product?.description || "";

  return (
    <div className='card'>
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <h3>₹ {price}</h3>
        <h4>{category}</h4>
        <p>{description}</p>

        <button onClick={() => onEdit(product)}>Edit</button>
        <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}

export default ProductCard
