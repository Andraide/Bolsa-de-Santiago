const crud = require('./crud/crud')
const { mockUser, mockInstrument, mockSuitcase } = require('./mock.data')
const { User, Instrument, Suitcase } = require('./models/models')

async function syncModels()
{
    try 
    {
        await User.sync({ force: true })
        await Instrument.sync({ force: true })
        await Suitcase.sync({ force: true })
        console.log("Models sync")
    }
    catch(err)
    {

    }
}

async function saveMockData()
{
    try
    {
        console.log("Trying to save mock data")
        let suitcase = await Suitcase.create(mockSuitcase)
        let user = await User.create(mockUser)
        await user.setSuitcase(suitcase)
        await crud.save(Instrument, mockInstrument)
       
    }
    catch(err)
    {
        console.log("Error on saveMockData", err)
        throw err
    }
}

async function modelsAssociations()
{
    try 
    {
        User.hasOne(Suitcase, {
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            foreignKey: { name: 'userId', allowNull: true }
        })
        Suitcase.belongsTo(User, { foreignKey: 'userId', allowNull: true })
    }
    catch(err)
    {
        console.log("Error on modelAssociations", err)
    }
}

module.exports =  { saveMockData, syncModels, modelsAssociations } 

