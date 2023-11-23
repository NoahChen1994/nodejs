const path = require("path");
//当前系统路径分割符
console.log(path.sep);

//拼接路径
const filePath = path.join("/content/","subfolder","test.txt");
console.log(filePath);

//basename() return 文件名称
console.log(path.basename(filePath));

//拼接绝对路径
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)