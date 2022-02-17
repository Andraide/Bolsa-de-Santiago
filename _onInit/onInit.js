const mockSuitcase = require('../_db/mock.data')
const crud = require('../_db/crud/crud')
const { Suitcase } = require('../_db/models/models')



async function saveMockData()
{
    try
    {
        //await crud.save(Suitcase, mockSuitcase)
        next()
    }
    catch(err)
    {
        console.log("Error on saveMockData", err)
        throw err
    }
}

module.exports =  saveMockData 