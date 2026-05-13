//__dirname
// console.log(__dirname);
// console.log(__filename);

//Path
// const path = require("path");

// const filePath = "/Dev/Node-js/CRUD/new.txt";

// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));

//os
// const os = require('os');

// // console.log("Operating system is - ", os.platform());
// // console.log("Operating system is - ", os.arch());
// // console.log("Operating system is - ", os.totalmem());
// console.log("Operating system is - ", os.freemem());


//URL
// const { log } = require('console');
// const url = require('url');

// const myURL = new URL('https://www.rokomari.com/book/publishers?ref=sm_p2');

// console.log(myURL.hostname);
// console.log(myURL.search);


//fs-module
// const fs = require('fs');

// fs.mkdirSync('newFolder');
// fs.rmdirSync('newFolder');



//http
// const http = require('http');
// http.createServer((req, resp) => {
//     resp.end("Welcome to Node.js and JavaScript");

// }).listen(3000);

// http.createServer((req, resp) => {
//     resp.end("Welcome to new bangladesh");

// }).listen(5000);


// const http = require('http');

// const server = http.createServer((req, res) => {
//     //content set
//     res.writeHead(200, { 'content-type': "text/plain" });//html
//     //response send
//     res.write('Hi this is our node server');//<h1></h1>html render
//     res.end();
// });

// server.listen(4000, () => {
//     console.log('Server is running');
// });



//Handling dif routes manually
// const http = require('http');

// const server = http.createServer((req, res) => {
//     let url = req.url
//     if (url === "/") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("<h2>This is home page</h2>");
//         res.end();
//     }
//     else if (url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("<h2>This is about page</h2>");
//         res.end();
//     }
//     else if (url === "/service") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("<h2>This is service page</h2>");
//         res.end();
//     }
//     else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404 not found");
//     }
// });
// server.listen(5000, () => {
//     console.log('server is running');

// });



//** */
// const http = require('http');
// const routes = {
//     '/': '<h2>This is home page</h2>',
//     '/about': '<h2>This is about page</h2>',
//     '/service': '<h2>This is service page</h2>'
// };

// const server = http.createServer((req, res) => {
//     const { url } = req;
//     const content = routes[url];

//     if (content) {
//         // Success case
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(content);
//     } else {
//         // Not Found case
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 not found');
//     }
// });

// const PORT = 5000;
// server.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

