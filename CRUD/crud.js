// //Rename file
// const fs = require('fs');
// fs.rename('old.txt', 'new.txt', (err) => {
//     if (err) throw err;
//     console.log('File renamed success');
// })


// Checking File Existence
// const fs = require('fs');
// fs.access("outputs.txt", fs.constants.F_OK, (err) => {
//     if (err) {
//         console.log("File does not exist");
//     } else {
//         console.log("File exists");
//     }
// });


//Delete file async (unlinkSync for sync)
// const fs = require('fs');
// fs.unlink('outputs.txt', (err) => {
//     if (err) throw err
//     console.log('File deleted');
// });


//Append-update sync
// const fs = require('fs');
// fs.appendFileSync('output.txt', '\nSyncLine Added');
// console.log('Finish appending');


//Append-update async
// const fs = require('fs');
// fs.appendFile('output.txt', '\nNew Line added', (err) => {
//     if (err) throw err;
//     console.log('Content Append');

// });


//Write file async
// const fs = require('fs');
// fs.writeFile('output.txt', "Hey Bumblebee", (err, data) => {
//     if (err) throw err;
//     console.log("File write successfuly");

// });


//Write/create file sync
// const fs = require('fs');
// fs.writeFileSync('output.txt', 'Helloo this is cybertron');


//Read file in async
// const fs = require('fs');
// fs.readFile('crud.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// console.log("Next process");


//Read file in sync
// const data = fs.readFileSync('./crud.txt', 'utf8');
// console.log(data);
// console.log("This happen after file read");

