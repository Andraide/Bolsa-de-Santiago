const fetch = require("node-fetch");
const crud = require('../db/crud/crud');
const { User, Instrument } = require("../db/models/models");
const paths = require("../_constants/_paths")
const requestOptions = require("../_constants/_requestOptions")
const host = "https://startup.bolsadesantiago.com"
const url = new URL(host)
url.search = "?access_token=E1F1BB3912B5491BB0AB9285A80E9FA7"


async function getData(path, requestOptions) {
    try {
        url.pathname = path
        console.log("URL", url.href, "REQUEST OPTIONS", requestOptions)
        const response = await fetch(url.href, requestOptions);
        const json = await response.json();
        return json
    } catch (error) {
        console.log("Error on getData", error);
    }
}


async function getInstrumentosValidos()
{
    const axes = await getData(paths.consulta + paths.getInstrumentosValidos)
    return axes
}


async function getUserInstruments(idUser)
{
    console.log("Id user", idUser)
    try
    {
        let suitcase = await crud.find(Instrument, idUser)
        return suitcase
    }
    catch(err)
    {
        console.log("Eror on getUserInstruments", err)
        throw err
    }
}

async function getInstrumentsToInvest()
{
    try
    {
        const { listaResult } = await getData(paths.consulta + paths.getInstrumentsToInvest, requestOptions.post)
        return listaResult
    }
    catch(err)
    {
        console.log("Eror on getInstrumentsToInvest", err)
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
    getInstrumentosValidos,
    getUserInstruments,
    getInstrumentsToInvest,
    removeAll
};
