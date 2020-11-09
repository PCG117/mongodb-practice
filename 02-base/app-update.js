/*
 * @Author: your name
 * @Date: 2020-10-26 07:55:43
 * @LastEditTime: 2020-10-26 08:07:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \02-base\app-update.js
 */
const { MongoClient } = require("mongodb")

const uri = 'mongodb://127.0.0.1'

const client = new MongoClient(uri, { useUnifiedTopology: true })

const dbName = 'shop'

async function run() {
    try {
        await client.connect()
        const database = client.db(dbName)
        const collection = database.collection('shop')
        const resultOne = await collection.updateOne({num:{$gt:4}},{$inc:{age:10}})
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