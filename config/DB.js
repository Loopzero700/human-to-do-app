const env = require('dotenv')
const mongooes = require('mongoose')
const asynchandler = require('express-async-handler')

const connectDB = asynchandler(async()=>{
    await mongooes.connect(process.env.MONGODB_URL)
    console.log("||<<<<DB is Connected>>>>||")
})


mongooes.connection.on("error",(err)=>{
    console.log("||mongoose connction error||")
    process.exit(1)
})
mongooes.connection.on("disconnect",(err)=>{
    console.log("||Mongoose disconnected. Trying to reconnect...||")
})

module.exports = connectDB