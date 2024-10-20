const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Assuming this is the correct path to your Product model

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Product.findOneAndDelete({ id });
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error });
    }
  });
  
module.exports = router;
