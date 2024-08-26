const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const cors = require('cors') 
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors());
app.options('*', cors());
// app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({ origin: true }));
const {dbConnection} = require('./connection/database')
dbConnection()

const routes = require('./route/route')
app.use('/', routes)
app.listen(port,()=>{
    console.log("port:", port)
})