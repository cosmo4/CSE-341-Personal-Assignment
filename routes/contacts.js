const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController');

router.get('/', baseController.getData)

router.get('/:id', baseController.getOneContact)

module.exports = router