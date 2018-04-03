console.log('--- LET KEYWORD ---');
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
        console.log(x);
        // ...
        break;
    }
    case 'y': {
        let x = 10;
        console.log(x);
        // ...
        break;
    }
}
console.log(x);

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

console.log('--- const keyword ---');
const bar = 123;
// const bar1; // const must be initialized
// bar = 34; // This can't be done

let y = 0;
// Low readability
if (y > 10) {
}

// Better!
const maxRows = 10;
if (y > maxRows) {
}

const foo2 = 123;
if (true) {
    const foo2 = 456; // Allowed as its a new variable limited to this `if` block
    console.log(foo2);
}
console.log(foo2);

const foo_ = { bar: 123 };
// foo_ = { bar: 456 }; // ERROR : Left hand side of an assignment expression cannot be a constant

const foo1_ = { bar: 123 };
console.log(foo1_); // { bar: 456 }
foo1_.bar = 456; // Allowed! BUT NOT RECOMENDABLE
console.log(foo1_); // { bar: 456 }

// For this reason I recommend using const with primitives or immutable data structures