const express = require('express');
const app = express();
const errorHandler = require('./helpers/error-handler');
const { saveMockData, syncModels, modelsAssociations } = require('./_db/onInit')
modelsAssociations().then(() => syncModels().then(() => saveMockData()))



app.use('/', require('./_controllers/api.controller'));
app.use(errorHandler);


const port = process.env.NODE_ENV === true ? 3000 : 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
