const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller.js')
//Exporta rutas

router.get('/list', categoriesController.list);
router.post('/create', categoriesController.create);
router.get('/getlist', categoriesController.getlist);
router.post('/getsubcat', categoriesController.getSubcat_bycat);
module.exports = router;