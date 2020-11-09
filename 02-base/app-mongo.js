const {MongoClient}=require('mongodb')
const { finished } = require('stream')
const uri='mongodb://127.0.0.1'
const client = new MongoClient(uri,{useUnifiedTopology:true})
const dbName='shop'
async function run(){
    try{
        await client.connect()
        const database= client.db(dbName)
        const collection=database.collection('users')
        const result=await collection.insertMany([{name:'Tom',age:18,score:100},{name:'Amy',age:88,score:19}])
        console.log(result);
    }finally{
        await client.close()
    }
}
run()
.catch(e=>{
    console.log('db error:',e);
})