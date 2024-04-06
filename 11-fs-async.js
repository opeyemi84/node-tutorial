//Async fs module uses a callback function
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;

  readFile("./content/second.txt", "utf-8", (err, data2) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data2;

    writeFile(
      "./content/result-async.txt",
      `${first} ${second}`,
      "utf-8",
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("File has been saved!!!");
      }
    );
  });
});
