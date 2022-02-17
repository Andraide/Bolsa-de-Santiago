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

async function getPromises(url ,ids)
{
    return ids.map(( x, i, v ) => {
        return new Promise(( resolve, reject ) => {
            https.get(url + x, (res) => {
                let rawData = '';
                res.on( 'data', (chunk) => { rawData += chunk });
                res.on( 'end', () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        resolve(parsedData);
                    } catch (e) {
                        console.error(e.message);
                        reject(e.message);
                    }
                })
            }).on('error', (e) => {
                console.error("Got error", e.message);
            })
        })
    })
}


async function getVikings() {
    const vikings = await getData(urlVikings)
    return vikings
}

async function getVikingsDirectors() {
    const vikings = await getData(urlVikings)
    const { results } = vikings
    let ids = results.map((x, i, v) => {
        const { id } = x
        return id
    })


    let promises = await getPromises(urlFullCastById ,ids)
    let fullCast = Promise.all(await promises).then( res => res ).catch( e => { console.log("Error on getAllData", e.message)})
    return fullCast.then((x) => { 
        let directors = x.map((y) => {
            const { directors } = y
            let names = directors.items.map((z) => z.name)
            return names
        })
        return directors
    })
}

async function getAxes() {
    const axes = await getData(urlAxes)
    return axes
}

async function getAxesCharacters() {
    const vikings = await getData(urlAxes)
    const { results } = vikings
    let ids = results.map((x, i, v) => {
        const { id } = x
        return id
    })


    let promises = await getPromises(urlFullCastById ,ids)
    let fullCast = Promise.all(await promises).then( res => res ).catch( e => { console.log("Error on getAllData", e.message)})
    return fullCast.then((x) => { 
        let directors = x.map((y) => {
            const { directors } = y
            let names = directors.items.map((z) => z.name)
            return names
        })
        return directors
    })
}


async function getDuration(title) {
    const movies = await getData(title == 'vikings' ? urlVikings : urlAxes)
    const { results } = movies
    let ids = results.map((x, i, v) => {
        const { id } = x
        return id
    })


    let promises = await getPromises(urlByTitle ,ids)
    let titleData = Promise.all(await promises).then( res => res ).catch( e => { console.log("Error on getAllData", e.message)})
    
    return titleData.then((x) => {
        
        let duration = x.map((y) => {
            const { runtimeMins } = y
            return runtimeMins
        })
        
        duration = duration.filter(x => x.length > 0)
        let totalDuration = duration.reduce((p, n) =>  parseInt(p) + parseInt(n))

        return totalDuration
    })

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

async function removeAll()
{
    crud.removeAll(Movie)
}

async function updateMovie(query)
{
    try 
    {
        let movieRecord = await crud.find(Movie, { Title: query.movie })
        if(movieRecord[0])
        {
            if("Plot" in movieRecord[0])
            {
                let wordArray = movieRecord[0].Plot.split(" ")
                for(let i=0; i< wordArray.length; i++)
                {
                    if(wordArray[i] == query.find)
                    {
                        movieRecord[0].Plot = movieRecord[0].Plot.replace(query.find, query.replace)    
                    }
                }
        
                await crud.update(Movie, query.movie, movieRecord[0].Plot)

                return movieRecord[0].Plot
            }
        }
        else
        {
            return "Nothing to update"
        }
    }
    catch(err) 
    {
        throw err
    }
}


module.exports = {
    getInstrumentosValidos,
    getVikings,
    getVikingsDirectors,
    getAxes,
    getAxesCharacters,
    getDuration
};
