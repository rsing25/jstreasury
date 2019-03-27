var fs = require('fs');
// fs is file system module.

//Read file in asynchronously (non-blocking)

fs.readFile('data.json', 'utf8', function(err,data) {
    if (err) throw err;
    const jsonObj = JSON.parse(data);
    console.log(jsonObj);
    console.log("--"+jsonObj.name);
});

//Read file in synchronously (blocking)

fs.readFileSync('data.json', 'utf8', function(data, err) {
    if(err) throw err;
    const jsonObj = JSON.parse(data);
    console.log(jsonObj);
    console.log(jsonObj.name);
} );