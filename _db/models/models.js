const sequelize = require('../connection')
const {user, instrument, suitcase} = require('../schemes/schemes')
const options = require('./options')

const User = sequelize.define('User', user, options)

const Instrument = sequelize.define('Instrument', instrument, options)

const Suitcase = sequelize.define('Suitcase', suitcase, options)

/*Suitcase.hasOne(User, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: 'suitcaseId'
})*/
//User.belongsTo(Suitcase)
//Instrument.belongsTo(Instrument)

module.exports = {
    User,
    Instrument,
    Suitcase
}