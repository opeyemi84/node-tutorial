const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.on("response", () => {
  console.log(`data received`);
});

customEmitter.on("response", () => {
  console.log(`I can put some other logic here`);
});

customEmitter.emit("response");
