const express = require('express');
const router = express.Router();
const moviesService = require('../_services/api.service');
const sequelize = require('../_db/connection')


router.post('/getInstrumentosValidos', getInstrumentosValidos)
router.get('/test/db', testDb)
router.get('/vikings', getVikings);
router.get('/vikings/directors', getVikingsDirectors);
router.get('/axes', getAxes);
router.get('/axes/characters', getAxesCharacters);
router.get('/duration', getDuration);


async function testDb()
{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


function getInstrumentosValidos(req, res, next)
{
    console.log("Calling getInstrumentosValidos")
    moviesService.getInstrumentosValidos()
        .then(instrumentos => res.json(instrumentos))
        .catch(err => next(err));
}

function getVikings(req, res, next) {
    moviesService.getVikings()
        .then(vikings => res.json(vikings))
        .catch(err => next(err));
}

function getVikingsDirectors(req, res, next) {
    moviesService.getVikingsDirectors()
        .then(vikings => res.json(vikings))
        .catch(err => next(err));
}

function getAxes(req, res, next) {
    moviesService.getAll()
        .then(axes => res.json(axes))
        .catch(err => next(err));
}

function getAxesCharacters(req, res, next) {
    moviesService.getAxesCharacters()
        .then(axes => res.json(axes))
        .catch(err => next(err));
}

function getDuration(req, res, next)
{
    let param = req.query.movies

    moviesService.getDuration(param)
        .then(duration => res.json(duration))
        .catch(err => next(err));
}

module.exports = router;


