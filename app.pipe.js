var fs = require('fs');

// readable = readable stream
// createReadStream
//  @param : path = source path
//  @param : options = an object of options
var readable = fs.createReadStream(
    __dirname + '/lorem.txt',
    {
        encoding:'utf8',
        highWaterMark: 16*1024
    }
);


// writable = writable stream
//  @param: path = write path
var writable = fs.createWriteStream(__dirname + '/lorem.write.txt');

// stream will fill a buffer
// when file is completely read, 'data' event will be emitted by node
// it will then run this listener i have defined here

readable.on('data', function(chunk) {
    console.log(chunk.length); // <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... >
    // on every chunk, send it to the write stream.
    // will automatically write it to the file.
    
    writable.write(chunk);

})







