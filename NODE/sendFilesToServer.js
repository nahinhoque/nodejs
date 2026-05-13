//sending html file
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile("./sendFilesToServer.html", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "text/plain" });
//                 res.end("Error loading html file");
//             } else {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             }
//         });
//     }
// });
// server.listen(5000, () => {
//     console.log("Server running");
// });


//JSON
// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/api") {
//         let user = {
//             name: "Hasib",
//             age: 25,
//             profession: "Developer",
//         };

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(user));
//     }
// });

// server.listen(5000, () => {
//     console.log("Server running");
// });


//** */
// const http = require("http");

// const server = http.createServer((req, res) => {
//     // Start of try block
//     try {
//         if (req.url === "/api") {
//             let user = {
//                 name: "Hasib",
//                 age: 25,
//                 profession: "Developer",
//             };

//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify(user));
//         }
//     }
//     catch (error) {
//         console.log("Error occurred:", error);
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
//     }
// });

// server.listen(5000, () => {
//     console.log("Server running");
// });



//*Image file
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     if (req.url === "/image") {
//         let filePath = path.join(__dirname, "./download.jpg");

//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(404);
//                 res.end("Image not found");
//             } else {
//                 res.writeHead(200, { "Content-Type": "image/jpeg" });
//                 res.end(data);
//             }
//         });
//     }
// });
// server.listen(5000, () => {
//     console.log("Server running");
// });


// const myPromise = new Promise((resolve, reject) => {
//     const completed = true;
//     completed ? resolve("Success! you work") : reject("Error!");
// });

async function handlePromise() {
    try {
        const resullt = await myPromise;
        console.log(`The result is - ${resullt}`);
    } catch (errror) {
        console.error(`The error is - ${errror}`);
    }
}

handlePromise();