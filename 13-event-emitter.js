const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", (name, id) => {
  console.log(`data received from user: ${name} with Id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`I can put some other logic here`);
});

customEmitter.emit("response", "john", 38);
