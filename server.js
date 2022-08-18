//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const connectDB = require("./config/database");//NEED THIS TO CONNECT AND CALL CONNECTDB
//const TodoTask = require("./models/TodoTask");
//HOME ROUTES AND EDIT ROUTE (2)
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')

require('dotenv').config({path:'./config/.env'})//object that contains where we MOVED the .env
connectDB()
//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
//SET ROUTES (1)
app.use('/',homeRoutes)
app.use('/edit',editRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));