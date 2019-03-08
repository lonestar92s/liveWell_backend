const Zillow = require('node-zillow');
const API_KEY = require('../server/api')
const express = require('express')
const router = express.Router()
let app = express()

const convert = require('xml-js')

//Instantiate
const zillow = new Zillow(API_KEY);
const parameters = {
  zpid: 124837225,

};

//get house 
router.get('/', (req, res, next)=>{
	return zillow.get('GetZestimate', parameters)
  .then(results=> {
    let jsonResults = convert.xml2json(results, {compact: true, spaces: 4})
  	res.send(jsonResults)
  })
  	.catch(error => res.send(error))
    // results here is an object { message: {}, request: {}, response: {}} 
  })
    


  	



module.exports = router
 




