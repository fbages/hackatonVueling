const controllerService = require('../controllers/controllerService');
const validator = require('../middlewares/validator');
const express = require('express');
const router = express.Router();

router.get('/services', controllerService.getAllServices);

router.get('/service/:id',validator.idValidator, controllerService.getService);
router.post('/service',validator.keyShort, controllerService.newService);
router.put('/service',validator.keyShort, controllerService.updateService);
router.delete('/service/:id', validator.idValidator, controllerService.deleteService);

module.exports = router;