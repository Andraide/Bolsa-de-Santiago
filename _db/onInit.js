const crud = require('./crud/crud')
const { mockUser, mockInstrument, mockSuitcase } = require('./mock.data')
const { User, Instrument, Suitcase } = require('./models/models')

async function syncModels()
{
    try 
    {
        await Suitcase.sync({ force: true })
        await User.sync({ force: true })
        await Instrument.sync({ force: true })
        
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
        //await Instrument.create(mockInstrument)
        let suitcase = await crud.save(Suitcase, mockSuitcase) 
        let user = await crud.save(User, mockUser) 
        await user.setSuitcase(suitcase)

        /*
        Pair saved association
        let suitcase = await crud.save(Suitcase, mockSuitcase) 
        let instrument = await crud.save(Instrument, mockInstrument)
        */
        let instrument = await crud.save(Instrument, mockInstrument)
        await instrument.setSuitcase(suitcase)
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

        Suitcase.hasMany(Instrument, {
            foreignKey: { name: 'suitcaseId', allowNull: true }
        })
        Instrument.belongsTo(Suitcase, { foreignKey: 'suitcaseId', allowNull: true })

    }
    catch(err)
    {
        console.log("Error on modelAssociations", err)
    }
}


async function removeModels()
{
    try
    {
        //await crud.removeAll(Instrument)
        await crud.removeAll(Suitcase)
        await crud.removeAll(User)
        console.log("Models destroyed")    
    }
    catch(err)
    {
        console.log("Error on destroyAll", err)
    }
}

module.exports =  { saveMockData, syncModels, modelsAssociations, removeModels } 

