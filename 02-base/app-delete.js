/*
 * @Author: your name
 * @Date: 2020-10-26 08:18:03
 * @LastEditTime: 2020-10-26 08:21:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \02-base\app-delete.js
 */
const { MongoClient } = require("mongodb")

const uri = 'mongodb://127.0.0.1'

const client = new MongoClient(uri, { useUnifiedTopology: true })

const dbName = 'shop'

async function run() {
    try {
        await client.connect()
        const database = client.db(dbName)
        const collection = database.collection('users')
        const resultMany = await collection.deleteMany({score:{$gt:90}})
        console.log(resultMany);
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