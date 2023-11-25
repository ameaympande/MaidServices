require('dotenv').config();
const express = require("express");
const bcrypt = require('bcrypt');
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
const corsOptions = {
    origin : "*",
    methods : ["GET" , "POST"],
    allowHeaders : ["Content-Type"],
}

app.use(cors(corsOptions));

app.listen(PORT , ()=>{
    console.log(`Server is runnung on port ${PORT}`)
})


