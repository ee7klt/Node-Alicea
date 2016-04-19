
var obj = {
    name: 'cuchillo',
    greet: function(param) {
        console.log(`Que pasa ${this.name} ${param}`); 
    }
}

obj.greet('!');
obj.greet.call({name: 'cucharon'},'!'); // args NOT passed in array
obj.greet.apply({name: 'cucharon'},['!']);  //args passed in array