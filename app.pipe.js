var fs = require('fs');

// readable = readable stream
// createReadStream
//  @param : path = source path
//  @param : options = an object of options
var readable = fs.createReadStream(
    __dirname + '/lorem.txt'
);


// writable = writable stream
//  @param: path = write path
var writable = fs.createWriteStream(__dirname + '/lorem.write.txt');



// pipe
//   @param: dest = destination to which to pipe the data coming from the readable stream
//   @return: dest = so we can chain pipes.
//   in the code 'src' is the readable stream.
readable.pipe(writable);


 







