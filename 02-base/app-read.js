const { MongoClient } = require("mongodb")

const uri = 'mongodb://127.0.0.1'

const client = new MongoClient(uri, { useUnifiedTopology: true })

const dbName = 'shop'

async function run() {
    try {
        await client.connect()
        const database = client.db(dbName)
        const collection = database.collection('users')
        const resultOne = await collection.findOne({score:{$gt:90}})
        console.log(resultOne);
        const cursor = await collection.find({})
        await cursor.forEach(v=>console.log(v))
    } finally {
        await client.close()
    }
}
run()
.catch(e => {
    console.log('db error:', e);
})