let MyMane: string;
MyMane = 'Diego';

let MyTupleExample: [string, boolean];

// Perfect Example
MyTupleExample = ["Diego", true];

// Bad Example
// MyTupleExample = [ true , "Diego" ];

// Enum
enum Family {
    Adri,
    Coquito
};
let MyFamily: Family = Family.Coquito;
console.log(MyFamily);


// functions
function returnMyName(): void {
    console.log(MyMane);
}


// function arguments
function multiply(number1 : number, number2 : number): number {
    return number1 * number2;
}

console.log(multiply(5, 2));