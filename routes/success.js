const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

router.get('/success', productsController.getSuccess);

router.post('/success' ,productsController.postSuccess);

module.exports = router;
