const controllerProduct = require('../controllers/controllerProduct');
const validator = require('../middlewares/validator');
const express = require('express');
const router = express.Router();

router.get('/products', controllerProduct.getAllProducts);

router.get('/product/:id', validator.idValidator, controllerProduct.getProduct);
router.post('/product', validator.keyShort, controllerProduct.newProduct);
router.put('/product', validator.keyShort, controllerProduct.updateProduct);
router.delete('/product/:id', validator.idValidator, controllerProduct.deleteProduct);

module.exports = router;