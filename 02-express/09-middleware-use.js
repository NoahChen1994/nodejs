const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize")
app.use([logger,authorize]);
//限制生效路径
//app.use("/about",[logger,authorize]);
app.get("/",(req,res)=>{
    res.send("home")
})

app.get("/about",(req,res)=>{
    res.send("about")
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})