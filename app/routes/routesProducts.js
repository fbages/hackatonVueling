const controllerProduct = require('../controllers/controllerProduct')
const express = require('express');
let router = express.Router();

router.get('/products', controllerProduct.getAllProducts);

router.get('/product/:id', controllerProduct.getProduct);
router.post('/product', controllerProduct.newProduct);
router.put('/product', controllerProduct.updateProduct);
router.delete('/product/:id', controllerProduct.deleteProduct);

module.exports = router;