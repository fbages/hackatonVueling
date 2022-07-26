const controllerProduct = require('../controllers/controllerProduct');
const express = require('express');
const router = express.Router();

router.get('/products', controllerProduct.getAllProducts);

router.get('/product/:productId', controllerProduct.getProduct);
router.post('/product', controllerProduct.newProduct);
router.put('/product', controllerProduct.updateProduct);
router.delete('/product/:productId', controllerProduct.deleteProduct);

module.exports = router;