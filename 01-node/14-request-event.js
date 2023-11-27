const http = require("http");

const server = http.createServer("request",(req,res)=>{
    res.end("welcom to my page");
})

server.listen(5500);