const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.end(
        "Welcome to our home page. This is where your dream starts having some fulfilment."
      );
    } else if (req.url === "/about") {
        //BLOCKING CODE!!!
        for (let i =0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i}, ${j}`)
            }
        }
      res.end("About Us: Our History");
    } else {
      res.end(
        ` <h1>Ooops!You seemed lost, hope you find your way home buddy</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>`
      );
    }
  });


server.listen(5000, () => {
    console.log('server is listening on port 5000....')
})