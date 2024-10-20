import React from 'react';
import axios from 'axios'; // To make requests to the backend

const apiUrl = process.env.REACT_APP_API_URL;

const ProductList = ({ products, setProducts }) => {

  // Function to handle product deletion
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend
      const response = await axios.delete(`${apiUrl}/${id}`);
      console.log(response.data.message); // Log the response message

      // Immediately update the products list in the frontend
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts); // Update the products state with the filtered array
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>ID:</strong> {product.id}, <strong>Name:</strong> {product.productName}, <strong>Price:</strong> {product.price}, <strong>Company:</strong> {product.company}, <strong>Stock:</strong> {product.stock}
            <button onClick={() => handleDelete(product.id)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
