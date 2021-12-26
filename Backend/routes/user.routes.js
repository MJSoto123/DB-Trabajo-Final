const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js')
//Exporta rutas

router.get('/list', userController.list)
router.get('/listdate', userController.listDate)
router.post('/signup', userController.signup)
router.post('/delete', userController.delete)

router.param('UserId', userController.UserById);
module.exports = router;