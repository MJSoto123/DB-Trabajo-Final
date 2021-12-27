const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller.js')
//Exporta rutas

router.get('/list', productController.list);
router.get('/liststock', productController.listStock);
router.post('/create', productController.create);
router.param('/ProductId', productController.ProductById);
router.post('/checkstock', productController.checkStock);
router.post('/modifystock', productController.modifyStock);
router.get('/getoffers', productController.getOffers);

// router.post('/createpack', productController.createPack);


module.exports = router;