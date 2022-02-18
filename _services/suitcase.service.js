const https = require("https");
const fetch = require("node-fetch");
const crud = require('../_db/crud/crud');
const { User, Instrument } = require("../_db/models/models");

const host = "https://startup.bolsadesantiago.com"
const paths = 
{
    consulta: "/api/consulta/",
    getInstrumentosValidos: "InstrumentosDisponibles/getInstrumentosValidos"
}

const url = new URL(host)
url.search = "?access_token=E1F1BB3912B5491BB0AB9285A80E9FA7"
const headers = 
{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
const requestOptions = 
{
    method: 'POST',
    headers
}

async function getData(path) {
    try {
        url.pathname = path
        const response = await fetch(url.href, requestOptions);
        console.log("res", response)
        const json = await response.json();
        return json
    } catch (err) {
        console.log("Error on getData", error);
        throw err
    }
}


async function getUserInstruments(idUser)
{
    try
    {
        let suitcase = await crud.find(Instrument, idUser)
        return suitcase
    }
    catch(err)
    {
        console.log("Eror on getUserSuitcase", err)
        throw err
    }
}

async function removeAll()
{
    try
    {
        await crud.removeAll(User)
        await crud.removeAll(Instrument)
    }
    catch(err)
    {   
        console.log("Error on removeAll", err)
        throw err
    }
}



module.exports = {
    getUserInstruments,
    removeAll
};
