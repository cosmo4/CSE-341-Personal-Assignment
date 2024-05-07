const express = require('express');
const professionalRoute = require("./routes")
const contactsRoute = require('./routes/contacts')
const baseController = require("./controllers/baseController")
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

const app = express();

app.use(bodyParser.json()).use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
.use('/contacts', contactsRoute);

const port = 8080;


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
