// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
console.log(__dirname);
console.log("--------------");
console.log(__filename);
console.log("--------------");
var num = 1;
//可按照指定的周期（以毫秒计）来调用函数或计算表达式
setInterval(() => {
    console.log("setInterval"+num++);
}, 4000);