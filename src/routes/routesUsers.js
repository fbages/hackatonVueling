const controllerService = require('../controllers/controllerUsers');
const validator = require('../middlewares/validator');
const express = require('express');
const router = express.Router();

router.get('/users', controllerService.getAllServices);

router.get('/user/:productId', controllerService.getService);
router.post('/user', controllerService.newService);
router.put('/user', controllerService.updateService);
router.delete('/user/:productId', controllerService.deleteService);

module.exports = router;