var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); // 456

let foo1 = 123;
if (true) {
    let foo1 = 456;
    console.log(foo1);
}
console.log(foo1); // 123

var index = 0;
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log(index); // 0

let variable = 'x';
let x = 'X variable';
switch (variable) {
    case 'x': {
        let x = 5;
        console.log( x );
        // ...
        break;
    }
    case 'y': {
        let x = 10;
        console.log( x );
        // ...
        break;
    }
}
console.log( x );

var funcs = [];
// create a bunch of functions
// for (var i = 0; i < 3; i++) { // With this definition, funcs will always print the last 
                                 // value of 'i'
for (let i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log(i);
    })
}
// call them
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
