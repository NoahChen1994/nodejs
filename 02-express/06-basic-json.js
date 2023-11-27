const express = require("express");
const app = express();
const prducts = require("./data/data")
app.get("/",((req,res)=>{
    res.json(prducts);
}))

app.listen(5000,()=>{
    console.log("sever listen port 5000");
})