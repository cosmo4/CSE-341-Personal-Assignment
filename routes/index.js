const express = require('express');
const router = express.Router();
const contactsRoute = require('./contacts')
const baseController = require('../controllers/baseController')

// GET /feed/posts
router.get('/contacts', contactsRoute);

router.post('/contacts', baseController.createUser)

module.exports = router;



