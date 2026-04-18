const { log } = require("console");
const http = require("http");
const arg = process.argv;
const port = arg[2];

http.createServer((req, res) => {
    res.write("Hii....Senorita")
    res.end();
}).listen(port)

//Changing Port no independently on cmd (How can make a dynamic port!)