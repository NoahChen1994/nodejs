const EventEmitter = require("events");
const customeEmitter = new EventEmitter();
//绑定事件
customeEmitter.on("response",(name,id)=>{
    console.log(`data receive user ${name} with id ${id}`);
})
customeEmitter.on("response",()=>{
    console.log("another logic");
})
//触发事件
customeEmitter.emit("response","bob", 23);