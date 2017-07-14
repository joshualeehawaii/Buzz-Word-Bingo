/*jshint esversion: 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var buzzWords = [{
  buzzWord: 'word 2',
  points: Number,
  heard: false
},
{
  buzzWord: 'word 1',
  points: Number,
  heard: false
}];

//Routes for the app

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
  console.log(req.body);
  buzzWords.push(req.body);
  res.send({ "success": true });
});

//PUT/buzzword

//DELETE/buzzword

//Server is listening
const server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(`server is running on host: ${host} and port: ${port}`);
});