const os = require("os");

//Info about system uptime in seconds
const sysUptime = os.uptime();
console.log(`The system uptime is ${sysUptime} seconds`);

//Info about current user
const userInfo = os.userInfo();
console.log(userInfo);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
