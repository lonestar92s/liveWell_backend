const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const houseRouter = require('../controller/router.js')

//express
let app = express()
//cors
app.use(cors())

app.use(morgan('combined'))
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set port
const PORT = 9000


app.listen(PORT, ()=>{
console.log("we connected")
})


