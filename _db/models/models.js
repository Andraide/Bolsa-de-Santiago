const {user, instrument } = require('../schemes/schemes')

const mongoose = require('mongoose');

const User = mongoose.model('Users', user);
const Instrument = mongoose.model('Intruments', instrument)

module.exports = { User, Instrument }