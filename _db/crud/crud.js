async function save(model, payload)
{
    try 
    {
        return await model.create(payload)
    }
    catch(err)
    {
        console.log("Error on save", err)
        throw err
    }
}

async function findAll(model, query)
{
    try
    {
        let all = await model.findAll(query)
        return all
    }
    catch(err)
    {
        console.log("Error on findAll", err)
        throw err
    }
    
}

async function find(model, query)
{
    try
    {
        let findedOne = await model.findAll({ Where: query})
        return findedOne
    }
    catch(err)
    {
        console.log("Error on findAll", err)
        throw err
    }
}

async function update(model, query, replace)
{
    try 
    {
        await model.update(replace, { Where: query })
    }
    catch(err)
    {
        console.log("Error trying to updata DB", err)
        throw err
    }
    
}


async function removeAll(model)
{
    try
    {
        await model.destroy({
            truncate: true
        })
    }
    catch(err)
    {
        console.log("Error on removeAll", err)
        throw err
    }
}

module.exports = {
    save,
    findAll,
    find,
    update,
    removeAll
}