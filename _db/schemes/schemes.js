const mongoose = require('mongoose');
const { Schema } = mongoose;


const user = new Schema ({
    userId: {
        type: String,
        unique: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
})

const instrument = new Schema ({
    userId: {
        type: String,
    },
    openPrice: {
        type: String,
    },
    trend: {
        type: String,
    },
    minPrice: {
        type: String,
    },
    lastPrice: {
        type: String,
    },
    avgPrice: {
        type: String,
    },
    closingPrice: {
        type: String,
    },
    highPrice: {
        type: String,
    },
    instruments: {
        type: String,
    },
    lastPrice: {
        type: String,
    },
    minPrice: {
        type: String,
    },
    openPrice: {
        type: String,
    },
    quantityLastTrade: {
        type: String,
    },
    tradeVolume: {
        type: String,
    },
    tradeAmount: {
        type: String,
    },
    timeStamp: {
        type: String,
    },
    trend: {
        type: String,
    },
    stocksQuantity: {
        type: String,
    },
    boughtPrice: {
        type: String,
    }
})


module.exports = {
    user,
    instrument
}