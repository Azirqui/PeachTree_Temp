// src/components/AddProduct.jsx
import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const AddProduct = ({ onProductAdded }) => {
  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [company, setCompany] = useState('');
  const [stock, setStock] = useState('');
  const [warning, setWarning] = useState('');
  const [success, setSuccess] = useState('');

  // Handler to reset the form
  const handleReset = () => {
    setId('');
    setProductName('');
    setPrice('');
    setCompany('');
    setStock('');
    setWarning('');
    setSuccess('');
  };

  // Handler to submit the form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = { id, productName, price, company, stock };

    try {
      const response = await axios.post(apiUrl , productData);
      console.log('Product saved:', response.data);

      setSuccess('Product added successfully!');
      setTimeout(() => {
        setSuccess('');
      }, 800);

      onProductAdded(); // Notify parent component to refresh the product list
      handleReset();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setWarning(error.response.data.message);
        setTimeout(() => {
          setWarning('');
        }, 800);
      } else {
        console.error('Error saving product:', error);
      }
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Product ID</h3>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

          <h3>Product Name</h3>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />

          <h3>Price</h3>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

          <h3>Company</h3>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />

          <h3>Stock</h3>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />

          <input type="submit" value="Add Product" />
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {warning && <p style={{ color: 'red' }}>{warning}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddProduct;
