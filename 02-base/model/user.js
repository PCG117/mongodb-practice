const mongoose = require('mongoose')

//1.生成一个Schema,Schema主要是用来定义文档的结构,字段类型以及验证
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    score: Number
})
//2.根据Schema生成一个模型,模型是一个构造函数
//2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
//2.2 model方法第二个参数指定Schema
const User = mongoose.model('user', userSchema)

module.exports = User