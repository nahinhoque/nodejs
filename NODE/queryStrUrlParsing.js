const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parseURL = url.parse(req.url);
    const query = querystring.parse(parseURL.query);

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write(`Name: ${query.name} \n`)
    res.write(`Age: ${query.age}`);
    res.end();
});
server.listen(5000, () => {
    console.log("Server is run");
});


// const http = require('http');

// const server = http.createServer((req, res) => {
//     // Construct a full URL object.
//     // We provide a base (http://localhost) because req.url is just the path.
//     const myUrl = new URL(req.url, `http://${req.headers.host}`);

//     // Access query parameters using .searchParams.get()
//     const name = myUrl.searchParams.get('name') || 'Unknown';
//     const age = myUrl.searchParams.get('age') || 'Unknown';

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write(`Name: ${name} \n`);
//     res.write(`Age: ${age}`);
//     res.end();
// });

// server.listen(5000, () => {
//     console.log("Server is running on http://localhost:5000");
// });