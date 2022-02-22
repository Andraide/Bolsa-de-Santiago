const { assert } = require("console");

async function save(model, payload)
{
    const data = new model(payload);
    try 
    {
        await data.save()
    }
    catch(err)
    {
        console.log("Not saved", err)
        throw err
    }
}

async function find(model, query)
{
    let responseDB = await model.find(query)
    return responseDB
}

async function update(model, query, replace)
{
    try 
    {
        await model.findOneAndUpdate(query, replace, { new: true }, (err, doc) => {
            if(err) console.log("Not updated")
            console.log("Updated")
        }).clone().catch(function(err){console.log("Update error", err)})
    }
    catch(err)
    {
        console.log("Error trying to updata DB", err)
        throw err
    }
    
}



async function removeAll(model)
{
    model.remove().then(function (model)
    {
        console.log("Model removed")
    }).catch(function (err)
    {
        assert.ok(err)
    })
}

module.exports = {
    save,
    find,
    update,
    removeAll
}