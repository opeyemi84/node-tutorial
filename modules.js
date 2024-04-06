// Modules
const names = require("./4-names");
const { sayHi } = require("./5-utils"); // Note to self: destructure an imported function to avoid 'is not a func error'
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(data);
console.log(`Is this person Married?: ${data.person.isMarried}`);
console.log(`Display an item: ${data.items[3]}`);

sayHi(secret);
sayHi(names.john);
sayHi(names.peter);
