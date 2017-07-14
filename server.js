/*jshint esversion: 6 */
const express = require('express');
const app = express();
var buzzWords = [];

//Routes for the app

//GET /
app.use(express.static('public'));

//GET/buzzword

//PUT/buzzword

//DELETE/buzzword

//Server is listening
const server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(`server is running on host: ${host} and port: ${port}`);
});