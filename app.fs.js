var fs = require('fs');

// sync file read
var number = fs.readFileSync(`${__dirname}/number.txt`,'utf8'); 
console.log(number);  // 415-999-9999


// async file read
var number2 = fs.readFile(`${__dirname}/number.txt`, 'utf8',
    function(err,data) {  // error-first callback pattern
        console.log(data); // <Buffer 34 31 35 2d 39 39 39 2d 39 39 39 39>
    }
)

console.log('Done!'); // we'll see this first before the console logging  of data
// because async!



