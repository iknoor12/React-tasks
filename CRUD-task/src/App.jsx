import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(data => setProducts(data));
  },[]);


  const handleAddProduct = (e) =>{
    e.preventDefault();

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newProduct => {
        setProducts([...products, newProduct]);
        clearForm();
      });
  };


  const startEdit = (product) => {
    setIsEditing(true)
    setEditId(product.id)
    setFormData(product)
  };

  const handleEditProduct = (e) => {
    e.preventDefault();

    fetch(`https://fakestoreapi.com/products/${editId}`, {
      method: "PUT",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updated => {
        setProducts(products.map(p => (p.id === editId ? updated : p)));
        setIsEditing(false);
        clearForm();
      });
  };


  const deleteProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setProducts(products.filter(p => p.id !== id));
      });
  };


  const clearForm = () => {
    setFormData({
      title: "", 
      description: "",
      price: "",
      image: "",
      category: ""
    });
  };

  return (
    <>
    <div>
      <h1>CRUD with FakeStore API</h1>

      <ProductForm 
        formData={formData}
        setFormData={setFormData}
        isEditing={isEditing}
        onAdd={handleAddProduct}
        onEdit={handleEditProduct}
      />

      <ProductList 
        products={products}
        onEdit={startEdit}
        onDelete={deleteProduct}
      />
    </div>
    
    </>
  )
}

export default App
