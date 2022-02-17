const express = require('express');
const app = express();
const errorHandler = require('./helpers/error-handler');
const populateMockData = require('./_onInit/onInit')


//app.use(populateMockData)
app.use('/', require('./_controllers/api.controller'));
app.use(errorHandler);


// start server
const port = process.env.NODE_ENV === true ? 3000 : 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
//populateMockData()
