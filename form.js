// Make html form in JS file
// Submit it with post request

const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    fs.readFile('html/form.html','utf-8',(error,data)=>{
        if(error){
        res.writeHead(500, { "content-type": 'text/plain' })

            res.end('internal server error')
            return;
        }
        if(req.url == '/'){
            res.write(data);
        }else if(req.url=='/submit'){

// Handle form Request Data
// Get data from request. 
            let dataBody = [];
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            
            });
            res.write('<h1>Data Submited</h1>')
        }
         res.end();
    })
   

}).listen(3200)



// http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": 'text/html' })
//     console.log(req.url)

//     if (req.url == '/') {
//         res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name='name' />
//         <input type='text' placeholder='enter email' name='email' />
//         <button>Submit</button>
//         </form>`);
//     }
//     else if (req.url == '/submit') {
//         res.write('<h1>Data Submited</h1>')
//     }

//     res.end();
// }).listen(3200)