const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
    throw new Error('DB error')
})
db.once('open', async () => {
    console.log('DB connected');
    const userSchema = new mongoose.Schema({
        name: String,
        age: Number,
        score: Number
    })
    const User = mongoose.model('user', userSchema)
    const user = new User({
        name: 'Leo',
        age: 18,
        score: 100
    })
    const result = await user.save()
    console.log(result)
})