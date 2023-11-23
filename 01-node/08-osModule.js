//import os module
const os = require("os");

//os.userInfo() return current userInfo
const user = os.userInfo();
console.log(user);

//uptime() return os up time
const upTime = os.uptime();
console.log("The system uptime is "+upTime);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);