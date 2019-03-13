const Zillow = require('node-zillow');
const {API_KEY} = require('../api-key')
const {WALKSCORE} = require('../api-key')
const express = require('express')
const router = express.Router()
let app = express()
const walkscore = require('walkscore-pk');
 

  

//Instantiate
const zillow = new Zillow(API_KEY);
const ws = new walkscore();

// set the attributes needed
ws.apiTransit = true;  // default true
ws.apiBike = true;  // default true
ws.apiLat = '47.6085';  // required
ws.apiLon = '-122.3295';  // required
ws.apiWsapikey = WALKSCORE;  // required

// //test house 
// router.get('/test', (req, res)=>{
// 	zillow.get('GetDeepSearchResults', {address: '2114 Bigelow Ave', citystatezip: '98109'})
//     .then(results=> {
//     	console.log(results.response.results.result[0].address[0].longitude[0])
//     })
//   	.catch(error => res.send(error))
//     // results here is an object { message: {}, request: {}, response: {}} 
// })    

router.get('/walkscore', (req, res)=>{
   ws.getScores()
    .then(results=> {
      res.send(results)
    })
    .catch(error => console.log(error))
}) 
//get deep search results
router.post('/search', (req, res)=> {
 let {address, citystatezip} = req.body
  
  zillow.get('GetDeepSearchResults', { address, citystatezip })
    .then(results=> {
      console.log(results)
      res.send(results)
    })
    .catch(error => res.send(error))
  }
)
  	



module.exports = router
 




