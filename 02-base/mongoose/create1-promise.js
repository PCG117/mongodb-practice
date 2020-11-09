const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error',()=>{
    throw new Error('DB error')
})
db.once('open',()=>{
    console.log('DB connected');
    const userSchema=new mongoose.Schema({
        name: String,
        age: Number,
        score: Number
    })
    const User=mongoose.model('user',userSchema)
    const user= new User({
        name: 'Amy',
        age: 18,
        score: 100
    })
    user.save()
    .then(result=>{
        console.log(result);
    })
    .catch(e=>{
        console.log(e);
    })
})