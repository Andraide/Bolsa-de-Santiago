const { DataTypes } = require('sequelize');


const user = {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}

const instrument = {
    instrumentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    openPrice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trend: {
        type: DataTypes.STRING,
        allowNull: false
    },
    minPrice: {
        type: DataTypes.STRING
    },
    lastPrice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avgPrice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    closingPrice: {
        type: DataTypes.STRING
    },
    highPrice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instruments: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastPrice: {
        type: DataTypes.STRING
    },
    minPrice: {
        type: DataTypes.STRING
    },
    openPrice: {
        type: DataTypes.STRING
    },
    quantityLastTrade: {
        type: DataTypes.STRING
    },
    tradeVolume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tradeAmount: {
        type: DataTypes.STRING
    },
    timeStamp: {
        type: DataTypes.STRING
    },
    trend: {
        type: DataTypes.STRING
    }
}

const suitcase = {
    suitcaseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stocksQuantity: {
        type: DataTypes.STRING
    },
    boughtPrice: {
        type: DataTypes.STRING
    }
}

module.exports = {
    user,
    instrument,
    suitcase
}