// src/components/InputDisplay.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import '../css/InputDisplay.css'

const apiUrl = process.env.REACT_APP_API_URL;




const InputDisplay = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend on component mount
  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl); // This fetches data from your specific collection
      setProducts(response.data); // Set the products state
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  useEffect(() => {
    fetchProducts(); // Call the fetch function on mount
  }, []); // Empty dependency array to run only once

  return (
    <div className={'containerMain'}>
      <AddProduct onProductAdded={fetchProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default InputDisplay;
