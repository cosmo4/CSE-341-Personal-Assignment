const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController');

router.get('/', baseController.getData)

router.get('/:id', baseController.getOneContact)

router.post('/', baseController.createContact);

router.put('/:id', baseController.updateContact);

router.delete('/:id', baseController.deleteContact);

module.exports = router