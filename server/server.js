const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const houseRouter = require('../controller/router.js')

//express
let app = express()
//cors
app.use(cors())

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('combined'))


//set port
const PORT = 9000		

app.use('/property', houseRouter)
app.listen(PORT, ()=>{
console.log("we connected")
})


