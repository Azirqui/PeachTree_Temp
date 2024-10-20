// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  company: { type: String, required: true },
  stock: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
