const express = require('express');
const router = express.Router();
const productController = require('../controllers/categories.controller.js')
//Exporta rutas

router.get('/list', productController.list);
router.post('/create', productController.create);
module.exports = router;