const crud = require('./crud/crud')
const { mockUser, mockInstrument, mockCreateOne } = require('./mock.data')
const { User, Instrument } = require('./models/models')


async function initData()
{
    try 
    {
        await crud.save(User, mockUser)
        for(let j of mockInstrument)
        {
            await crud.save(Instrument, j)
        }
        console.log("Save!")
    }
    catch(err)
    {
        console.log("Error on initData", err)
    }
}

module.exports =  { initData } 

