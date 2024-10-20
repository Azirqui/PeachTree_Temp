import React, { useState } from 'react';
import '../css/AddOrder.css';

const AddOrder = () => {
  const [order, setOrder] = useState({
    customerName: '',
    products: [],
  });

  const [newProduct, setNewProduct] = useState({
    productName: '',
    quantity: '',
    price: '',
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      products: [...prevOrder.products, newProduct],
    }));
    setNewProduct({ productName: '', quantity: '', price: '' }); // Reset new product input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order saved:', data);
        // Optionally reset the form after submission
        setOrder({ customerName: '', products: [] });
      } else {
        console.error('Failed to save order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const removeProduct = (index) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      products: prevOrder.products.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <h3>Add Order</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Customer Name</label>
          <input
            type="text"
            className="form-control"
            value={order.customerName}
            onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
          />
        </div>

        <h4>Add Products</h4>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="productName"
            className="form-control"
            value={newProduct.productName}
            onChange={handleProductChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            value={newProduct.quantity}
            onChange={handleProductChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={newProduct.price}
            onChange={handleProductChange}
          />
        </div>
        <button type="button" className="btn btn-secondary" onClick={addProduct}>
          Add Product
        </button>

        <h5>Products List</h5>
        <ul>
          {order.products.map((product, index) => (
            <li key={index}>
              {product.productName} - Qty: {product.quantity} - Price: {product.price}
              <button type="button" onClick={() => removeProduct(index)}>Remove</button>
            </li>
          ))}
        </ul>

        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>
    </div>
  );
};

export default AddOrder;
