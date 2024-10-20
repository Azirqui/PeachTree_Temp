import "../styles/inventory.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import '../styles/InputDisplay.css'

const apiUrl = process.env.REACT_APP_API_URL;

function Inventory() {
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
    <div className=" ml-[18%] w-4/5 pl-4 flex justify-center align-center h-48">
    <ProductList products={products} setProducts={setProducts} />
    </div>
  );
}
export default Inventory;
