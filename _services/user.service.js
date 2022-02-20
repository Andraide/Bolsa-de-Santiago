const crud = require('../db/crud/crud');
const { User, Instrument } = require("../db/models/models");

async function getUser(idUser)
{
    try
    {
        let user = await crud.find(User, idUser)
        return user
    }
    catch(err)
    {
        console.log("Eror on getUserSuitcase", err)
        throw err
    }
}

module.exports = { getUser }