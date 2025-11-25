import React from 'react'

const ProductForm = ({formData, setFormData, isEditing, onAdd, onEdit}) => {
  return (
    <>
      <form onSubmit={isEditing ? onEdit : onAdd}>
        <input 
            type="text" 
            placeholder='Title'
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
        />

        <input 
            type="text" 
            placeholder='Price'
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}    
        />

        <input 
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />

        <input 
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />

        <textarea
            placeholder='Description'
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
        />

        <button type='submit'>
            {isEditing ? "Update Product": "Add Product"}
        </button>
      </form>
    </>
  );
}

export default ProductForm
