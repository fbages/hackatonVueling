const controllerService = require('../controllers/controllerService')
const express = require('express');
const router = express.Router();

router.get('/services', controllerService.getAllServices);

router.get('/service/:id', controllerService.getService);
router.post('/service', controllerService.newService);
router.put('/service', controllerService.updateService);
router.delete('/service/:id', controllerService.deleteService);

module.exports = router;