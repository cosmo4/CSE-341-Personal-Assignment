const express = require('express');
const router = express.Router();
const contactsRoute = require('./contacts')


// GET /feed/posts
router.get('/contacts', contactsRoute);


module.exports = router;



