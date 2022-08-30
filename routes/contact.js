const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

router.get( '/contact' , productsController.getContact );

router.post('/contact' ,productsController.postContact);


module.exports = router;