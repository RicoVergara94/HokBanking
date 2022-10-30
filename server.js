const express = require('express');
const http = require('http');
const bodyParser = require("body-parser")
const fs = require('fs');

//create express app
const app = express();

//middleware
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


//import the routes
const expenseRoute = require('./routes/expenses.js');

app.use("/", expenseRoute);


const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});