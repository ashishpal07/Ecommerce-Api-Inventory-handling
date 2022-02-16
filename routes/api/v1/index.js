

const express = require('express');
const router = express.Router();
const productsController = require('../../../controllers/api/v1/product_controller');

router.use('/products', require('./product'));
router.get('/products', productsController.allProducts);


module.exports = router;