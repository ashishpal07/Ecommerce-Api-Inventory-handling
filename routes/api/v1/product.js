
const express = require('express');
const router = express.Router();
const productsController = require('../../../controllers/api/v1/product_controller');

// route to create product 
router.post('/create', productsController.createProduct);

// route to delete product 
router.delete('/:id', productsController.deleteProduct);

// route to update product by increase in quantity
router.post('/:id/update_quantityi/:num', productsController.updateProductIncrease); 

// route to update product by decrease in quantity
router.post('/:id/update_quantityd/:num', productsController.updateProductDecrease);

module.exports = router;