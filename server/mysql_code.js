const express = require('express')
const config = require('./configs/environment.js')
const bodyparser = require('body-parser')

const app = express();

var cors = require('cors');
app.use(cors());

app.use(bodyparser.urlencoded({extended: true}))

app.use(bodyparser.json())

//Routes
const router = require('./routes/routes') 

app.use("/",router) 


app.listen(config.port,() => {

	console.log("API running ",config.port)

})
