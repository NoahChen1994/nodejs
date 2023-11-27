const express = require("express");
const app = express();
const morgan = require('morgan');
// const logger = require("./logger");
// const authorize = require("./authorize");

app.use(morgan("large"));

app.get("/",(req,res)=>{
    res.send("Home")
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
  