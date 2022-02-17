const sequelize = require('../connection')
const {user, instrument, suitcase} = require('../schemes/schemes')

const User = sequelize.define('User', user)
const Instrument = sequelize.define('Instrument', instrument)
const Suitcase = sequelize.define('Suitcase', suitcase)