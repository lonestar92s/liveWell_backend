const Zillow = require('node-zillow');
const API_KEY = require('../api-key')
const express = require('express')
const router = express.Router()
let app = express()



//Instantiate
const zillow = new Zillow(API_KEY);
const parameters = {
  zpid: 48749425,
};

//get house 
router.get('/', (req, res)=>{
	zillow.get('GetZestimate', parameters)
    .then(results=> {
    	res.send(results)
    })
  	.catch(error => res.send(error))
    // results here is an object { message: {}, request: {}, response: {}} 
})    
//Use form to accept "GetSearchResults" dynamically on submit
router.get('/pic', (req, res)=> {
  zillow.get('GetUpdatedPropertyDetails', parameters)
    .then(results=> {
      res.send(results)
    })
    .catch(error => res.send(error))
})

//get deep search results
router.post('/search', (req, res)=> {
 let {address, citystatezip} = req.body
  
  console.log(req.body)
  zillow.get('GetSearchResults', { address, citystatezip })
    // .then(results => {
    //   zillow.get('GetUpdatedPropertyDetails', results.response.results.result[0].zpid[0])
    // })
    .then(results=> {
      res.send(results)
    })
    .catch(error => res.send(error))
  }
)
  	



module.exports = router
 




