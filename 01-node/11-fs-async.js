const fs = require("fs");
const path = require("path");
const basePath = path.resolve(__dirname,"content");
fs.readFile(basePath+"/first.txt","utf-8",(err,re)=>{
    if(err){
        console.log(err);
        return;
    }
    const f1 = re;
    console.log(re);
    fs.writeFile(basePath+"/result-async.txt",
    `here is result:${f1}`,
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("done task");
    })
});