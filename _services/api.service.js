const https = require("https");
const fetch = require("node-fetch");
const urlVikings = "https://imdb-api.com/en/API/SearchMovie/k_job2e7ku/viking";
const urlFullCastById = "https://imdb-api.com/en/API/FullCast/k_job2e7ku/"
const urlAxes = "https://imdb-api.com/en/API/SearchMovie/k_job2e7ku/axe";
const urlByTitle = "https://imdb-api.com/en/API/Title/k_job2e7ku/";

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
        } catch (error) {
            console.log("Error on getData", error);
        }
      }


async function getInstrumentosValidos()
{
    const axes = await getData(paths.consulta + paths.getInstrumentosValidos)
    return axes
}

async function getMoviesDB(query)
{
    let movies = await crud.find(Movie, query)
    let movieFiltered = movies.map((movie) => {
        const { Title, Year, Released, Genre, Director, Actors, Plot, Ratings } = movie
        return { Title, Year, Released, Genre, Director, Actors, Plot, Ratings }
    })
    return movieFiltered
}


module.exports = {
    getInstrumentosValidos
};
