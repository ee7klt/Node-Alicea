var buffer = new  ArrayBuffer(8); 
// this is not coming from node
// its coming from the new v8 engine (ES6)


// can then deal with my data
// by creating a view
var view = new Int32Array(buffer);
// 8 * 8 = 64 bits. so can store at most two number in Int32 view.
view[0] = 5;
view[1] = 15;
console.log(view);  // Int32Array { '0': 5, '1': 15 }
 
 // if try to store more than 2 numbers will not error
 // it just won't store the number
 
 