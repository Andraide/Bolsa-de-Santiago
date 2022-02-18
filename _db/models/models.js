const sequelize = require('../connection')
const {user, instrument, suitcase} = require('../schemes/schemes')
const options = require('./options')

const User = sequelize.define('User', user, options)

const Instrument = sequelize.define('Instrument', instrument, options)

const Suitcase = sequelize.define('Suitcase', suitcase, options)


module.exports = {
    User,
    Instrument,
    Suitcase
}