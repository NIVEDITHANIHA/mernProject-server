/* import Dotenv ------------------------------------------*/

require("dotenv").config()

/* import express ----------------------------------------*/
const express = require('express')

/* import cors -------------------------------------------*/
const cors = require("cors")

/* import router -------------------------------------------*/
const router = require("./ophizRouting/router")

/* impport connection pagge-------------------------------- */
require('./dbConnect/connection')
/* create seerver usinng express -------------------------*/
const ophiztaskServer = express();

/* use of cors by server ---------------------------------*/
ophiztaskServer.use(cors())

/* use of json server -------------------------------------*/
ophiztaskServer.use(express.json())
/* use of router by server ---------------------------------*/

ophiztaskServer.use(router)

/* create a port  -----------------------------------------*/
const PORT = process.env.PORT || 4000

/* run the server using the port ---------------------------*/
ophiztaskServer.listen(PORT, () => {
    console.log(`Server Running at ${PORT} for Ophiz task`);
})


