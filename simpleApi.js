// Static API using Node.js
const http = require('http');
const userData = [
    {
        name: "Nahin",
        age: 27,
        email: "nahin@test.com"
    },
    {
        name: "Sahin",
        age: 20,
        email: "sahin@test.com"
    },
    {
        name: "Rohan",
        age: 30,
        email: "rohan@test.com"
    }
]
http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();

}).listen(6300)