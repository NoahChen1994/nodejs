const name = require("./04-name");
console.log(name)

const sayHi = require("./05-nameUtils");
sayHi(name.firstName);
sayHi(name.lastName);

const data = require('./06-alternative')
console.log(data);

require("./07-mind")
