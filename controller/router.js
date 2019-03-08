const Zillow = require('node-zillow');
const API_KEY = require('../server/api')
const express = require('express')
const router = express.Router()
let app = express()



//Instantiate
const zillow = new Zillow(API_KEY);
const parameters = {
  zpid: 124837225,

};

//get house 
router.get('/', (req, res, next)=>{
	zillow.get('GetZestimate', parameters)
  .then(results=> {
  	console.log(results)
  	// res.send(results.json())
  	res.send(results)
  })
  	.catch(error => res.send(error))
    // results here is an object { message: {}, request: {}, response: {}} 
  })
    


  	



module.exports = router
 




