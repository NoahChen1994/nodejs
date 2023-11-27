const path = require("path");
const basePath = path.resolve(__dirname,"content");

const fs = require("fs");
console.log("start");
const f1 = fs.readFileSync(basePath+"/first.txt","utf-8");
const f2 = fs.readFileSync(basePath+"/second.txt","utf-8");
console.log(f1);
console.log(f2);
fs.writeFileSync(
    //path
    basePath+"/result-sync.txt",
    `here is result: ${f1}, ${f2}`,
    {flag:'a'}
)