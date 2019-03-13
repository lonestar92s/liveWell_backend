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
ws.apiLat = '30.274545';  // required 
ws.apiLon = '-97.740751';  // required
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
  console.clear()
 let {address, citystatezip} = req.body
 
      

zillow.get('GetDeepSearchResults', { address, citystatezip })
    
    .then(results=> {
      console.log(results)
      return results
    })
    .then (async results => {
      let lng = results.response.results.result[0].address[0].longitude[0]
      let lat = results.response.results.result[0].address[0].latitude[0]
      ws.apiTransit = true;  // default true
      ws.apiBike = true;  // default true
      ws.apiLat = lat.toString();  // required 
      ws.apiLon = lng.toString();  // required
      ws.apiWsapikey = WALKSCORE;  // required
      const walksults = await ws.getScores()
        .then(walksults => {
          console.log(walksults)
       
          return walksults
        })
        .catch(error => {
          console.log(error)
          return error
        })
        console.log(results)
      res.send({ results, walksults}) 
    })
    .catch(error => res.send(error))
  }
)

  	



module.exports = router
 




