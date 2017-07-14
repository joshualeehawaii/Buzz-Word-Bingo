/*jshint esversion: 6 */
const express = require('express');
const app = express();
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


//PUT/buzzword

//DELETE/buzzword

//Server is listening
const server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(`server is running on host: ${host} and port: ${port}`);
});