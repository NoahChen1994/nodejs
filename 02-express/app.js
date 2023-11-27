console.log("hello, express!");
const http = require("http");
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === "/"){
        res.writeHead(200,{"contentType":"text/html"})
        res.write("<h1>home page<h1>")
        res.end(url);
    }else if(url === "/about"){
        res.writeHead(200,{"contentType":"text/html"})
        res.write("<h1>about page<h1>")
        res.end(url);
    }else{
        res.writeHead(404,{"contentType":"text/html"})
        res.write("<h1>page not found<h1>")
        res.end(url);
    }
});
server.listen(5000)