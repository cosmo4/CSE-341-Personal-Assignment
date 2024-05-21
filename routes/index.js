const express = require('express');
const router = express.Router();
const contactsRoute = require('./contacts')
const baseController = require('../controllers/baseController')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('../swagger.json');


routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

// GET /feed/posts
router.get('/contacts', contactsRoute);

router.post('/contacts', baseController.createContact)

routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'https://localhost:8080/api-docs',
      };
      res.send(docData);
    })
  );

module.exports = router;



