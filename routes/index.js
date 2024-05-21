const express = require('express');
const router = express.Router();
const contactsRoute = require('./contacts')
const baseController = require('../controllers/baseController')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('../swagger.json');


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// GET /feed/posts
router.get('/contacts', contactsRoute);

router.post('/contacts', baseController.createContact)

router.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'https://localhost:8080/api-docs',
      };
      res.send(docData);
    })
  );

module.exports = router;



