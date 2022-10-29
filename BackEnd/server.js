//const dotenv = require('dotenv');
const http = require('http');
const express = require('express');
const app = express();

app.use(express.json());
//dotenv.config({ path: './config.env' });





const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});