var buf = new Buffer('Hello', 'utf8');

// take 'hello' and convert it to utf8 encoding.
// utf8 tells it what mapping of string to binary digits to use

console.log(buf);  // buffer is an object <Buffer 48 65 6c 6c 6f>
console.log(buf.toString());  // convert it back to string.
console.log(buf.toJSON());  // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buf[2]); // 108


buf.write('wo');
console.log(buf.toString());   // wollo