/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//Batman and Superman are testing purposes
var buzzWords = [{
  buzzWord: 'Batman',
  points: 10,
  heard: false
},
{
  buzzWord: 'Superman',
  points: 15,
  heard: false
}];

//Start routes for the app

//GET /
app.use(express.static('public'));

//GET/buzzword
app.get('/buzzword', (req, res) => {
  var printBuzzwords = buzzWords.map((item) =>{
    return item.buzzWord;
  });
  res.send(printBuzzwords);
});

//POST/buzzword
app.post('/buzzword', jsonParser, (req, res) => {
  buzzWords.push(req.body);
  res.send({ "success": true });
});

//PUT/buzzword
app.put('/buzzword', jsonParser, (req, res) => {
  buzzWords.forEach((item) => {
    if (req.body.buzzWord === item.buzzWord){
      item.heard = req.body.heard;
      res.end(JSON.stringify({ "success": true, newScore: Number })); //res turned to string
    } else {
      res.end(JSON.stringify({ "success": false})); //res turned to string
    }
  });
});

//DELETE/buzzword
app.delete('/buzzword', jsonParser, (req, res) => {
  buzzWords.forEach((item, index) => {
    if (req.body.buzzWord === item.buzzWord){
      buzzWords.splice(index,1);
      res.end(JSON.stringify({ "success": true})); //res turned to string
    } else {
      res.end(JSON.stringify({ "success": false})); //res turned to string
    }
  });
});

//POST/reset
app.post('/reset', jsonParser, (req, res) => {
  if ( req.body.reset === true){
  console.log('before :', buzzWords);
  buzzWords = [];
  res.send({ "success": true });
  console.log('after: ', buzzWords);
} else {
  res.end(JSON.stringify({ "success": false})); //res turned to string
}

});

//Server is listening
const server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(`server is running on port: ${port}`);
});