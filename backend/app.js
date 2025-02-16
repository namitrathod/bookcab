const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require('cookie-parser');
const connectToDb=require('./db/db')
const userRoutes= require('../backend/routes/user.routes')
const driverRoutes= require('../backend/routes/driver.routes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


connectToDb();

app.get("/", (req, res) => {
  res.send("hello world")
})

app.use('/users', userRoutes);

app.use('/drivers', driverRoutes);

module.exports = app
