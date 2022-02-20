﻿const express = require('express');
const router = express.Router();
const instrumentsService = require('../_services/instruments.service');

router.get('/getUser', getUser)
router.post('/getInstrumentosValidos', getInstrumentosValidos)
router.post('/getUserInstruments', getUserInstruments)
router.get('/remove', removeAll)

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


module.exports = router;


