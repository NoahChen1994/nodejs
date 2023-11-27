const express = require('express');
const app = express();
//create a router
const router = express.Router();

//definition middleware function
router.use((req,res,next)=>{
    console.log("access router");
    next();
})

//difinition router
router.get("/",(req,res)=>{
    res.send("Welcom to router")
})

//Mount to app
app.use("/router",router)

app.listen(5000,(req,res)=>{
    console.log("server started on 5000");
})