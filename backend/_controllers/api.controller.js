const express = require('express');
const router = express.Router();
const instrumentsService = require('../_services/instruments.service');

//router.get('/', getDist)
router.get('/ping', getPong)
router.get('/getUser', getUser)
router.post('/getInstrumentosValidos', getInstrumentosValidos)
router.post('/getUserInstruments', getUserInstruments)
router.get('/getInstrumentsToInvest', getInstrumentsToInvest)
router.get('/remove', removeAll)

async function getPong(req, res, next)
{
    res.send("Pong")
}



/*async function getDist(req, res, next)
{
    console.log("Sending the fron")
    res.sendFile(process.cwd()+"/my-app/dist/bolsa-santiago/index.html")
}*/

async function getUser(req, res, next)
{
    /*instrumentsService.getUserInstruments()
        .then(instrumentos => res.json(instrumentos))
        .catch(err => next(err));*/
}

async function removeAll(req, res, next)
{
    instrumentsService.removeAll()
        .then(msg => res.json(msg))
        .catch(err => next(err));
}

async function getUserInstruments(req, res, next)
{
    console.log("req body", req.body)
    instrumentsService.getUserInstruments(req.body)
        .then(instrumentos => { 
            res.json(instrumentos) 
            console.log(instrumentos)
        })
        .catch(err => next(err));
}


function getInstrumentosValidos(req, res, next)
{
    instrumentsService.getInstrumentosValidos()
        .then(instrumentos => res.json(instrumentos))
        .catch(err => next(err));
}

function getInstrumentsToInvest(req, res, next)
{
    console.log("Getting instruments to invest")
    instrumentsService.getInstrumentsToInvest()
        .then(instruments => res.json(instruments))
        .catch(err => next(err));
}   


module.exports = router;


