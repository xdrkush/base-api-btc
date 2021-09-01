/*
 *    Komodo
 * ************* */

require('dotenv').config()

const config = {
  rpchost: "localhost", // to put in the .env
  rpcport: 7771, // to put in the .env
  rpcuser: "hsukrd", // to put in the .env
  rpcpassword: "mon$uperMotDePa$$e" // to put in the .env
};

/*
 *    Server
 * ************* */ 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors (from front-end application)
app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET'],
  credentials: true
}))

module.exports = {
  config
}

// Router HTTP
const ROUTER = require('./router')
app.use('/api', ROUTER)


const port = process.env.PORT || 7777;
app.listen(port, () => console.log(`Server running on port ${port}`));