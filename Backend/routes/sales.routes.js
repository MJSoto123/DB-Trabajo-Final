const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales.controller.js')
//Exporta rutas

router.get('/list', salesController.list);
router.post('/create', salesController.create);
router.param('salesid', salesController.SalesById);
router.post('/listbyuserid', salesController.listByUserId);


module.exports = router;