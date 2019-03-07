const Zillow = require('node-zillow');
const API_KEY = require('./api')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
let app = express()

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Instantiate
const zillow = new Zillow(API_KEY);
const parameters = {
  zpid: 124837225
};

 




//get house 
router.get('/', (req, res)=> zillow.get('GetZestimate', parameters)
  .then(function(results) {
  	console.log(results.response.address.street)
    return results;
    // results here is an object { message: {}, request: {}, response: {}} 
  }))



module.exports = houseRouter
