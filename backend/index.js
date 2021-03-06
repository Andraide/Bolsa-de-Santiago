const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('./helpers/error-handler');
const cors = require('cors')

//Initialize db with mockdata
const { initData } = require('./db/onInit')
initData()

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .catch(error => console.log("Error connecting to Db", error))


app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/api', require('./_controllers/api.controller'));
app.use(errorHandler);


const port = process.env.NODE_ENV === true ? 3000 : 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

module.exports = app