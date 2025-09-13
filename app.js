const express = require('express')
const app = express()
const env = require('dotenv').config()
const path = require('path')
const Router = require("./routers/task")
const DB = require('./config/DB')
DB()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',Router)

app.listen(process.env.PORT,()=>console.log("||app is up and running||"))