const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller.js')
//Exporta rutas

router.get('/list', productController.list);
router.get('/liststock', productController.listStock);
router.post('/create', productController.create);
router.post('/productid', productController.ProductById);
router.post('/checkstock', productController.checkStock);
router.post('/modifystock', productController.modifyStock);
router.get('/getoffers', productController.getOffers);
router.post('/modify', productController.modify);
// router.post('/bycategoryid', productController.byCategoryID);
router.post('/bycategoryname', productController.byCategoryName);
// router.get('/allproducts', productController.allProductsbyCategoryID);
router.post('/delete', productController.delete);



// router.post('/createpack', productController.createPack);


module.exports = router;