const testConstant = "testing a text";
console.log(testConstant);

let testVariable = "Test Variable";

// block scope
function reset() {
    let testVariable = 20;
    console.log(testVariable);
}
reset();
console.log(testVariable);

// arrow functions
const sum = function (number1: number, number2: number): number {
    return number1 + number2
}
console.log(sum(1, 2));

const sumArrowFunction = (number1: number, number2: number) => number1 + number2;
console.log(sumArrowFunction(2, 1));

class Adder {
    constructor(public a: number) { }
    // This function is now safe to pass around
    add = (b: number): number => this.a + b;
}

class ExtendedAdder extends Adder {
    // Create a copy of parent before creating our own
    private superAdd = this.add;
    // Now create our override
    add = (b: number): number => {
        return this.superAdd(b);
    }
}

let extender = new ExtendedAdder(1);
console.log("ExtendedAdder");
console.log(extender.add(2));

// Functions and Defaults Values
const countDown = (counter: number = 10): string => {
    let originalCounter = counter;
    while (counter > 0) {
        counter--;
    }
    return "ORIGINAL COUNTER = " + originalCounter + " -- FINAL COUNTDOWN " + counter;
}
console.log(countDown(19));
console.log(countDown());

// Rest and Spread
let numbers = [1, 65, 3, -2, 4];
console.log(Math.max(1, 54, 32 - 4));
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray( 2 , 3 , 4 , 66 ) );

//Destructuring Array
const numbersArray = [1,2];
const [n1 ,n2 ] = numbersArray;
console.log( n1, n2 );

// Destructuring Objects
const userData = { MyName : 'Diego' , age : 36}
const {MyName: newName , age: newAge } = userData;
console.log( newName , newAge );

// Templates Literals
const miNombre = "Diego";

const saludo = `Hola 
Soy ${miNombre}`;

console.log( saludo );

