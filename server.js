const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('./helpers/error-handler');


//Initialize db with mockdata
const { saveMockData, syncModels, modelsAssociations, removeModels, saveOneMockData, initData } = require('./_db/onInit')
//removeModels().then(() => console.log("Models removed"))
//syncModels().then(() => modelsAssociations().then(() => syncModels().then(() => saveMockData().then(() => saveOneMockData()))))
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .catch(error => console.log("Error connecting to Db", error))
//initData()

app.use(morgan('combined'))
var options = {
  inflate: true,
  limit: '100kb',
  type: 'application/json'
};
app.use(bodyParser.raw(options))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', require('./_controllers/api.controller'));
app.use(errorHandler);


const port = process.env.NODE_ENV === true ? 3000 : 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
