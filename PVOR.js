
var a = 1;

(function(x) {
   x = x+1;
   console.log('primitive x = ' + x);
})(a)

console.log('primitive a = ' + a)


var b = {
    a: 1
};
console.log(b.a);
(function(x) {
    x.a = 2;
    console.log('property a of object x = ' + x.a);
})(b)

console.log('property a of object b = ' + b.a)
