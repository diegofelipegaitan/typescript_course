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

// function arguments
function multiply(number1: number, number2: number): number {
    return number1 * number2;
}

let MyMultyply: (a: number, b: number) => number;
MyMultyply = multiply;

// objects
let UserData: { name: String, age: number };

UserData = {
    age: 32,
    name: "Diego"
};

// complex object
let ComplexObject: { data: number[], output: (all: boolean) => number[] };
ComplexObject = {
    data: [1, 2, 3],
    output: function (all: boolean) { return this.data }
};

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let ComplexObject2: Complex = {
    data: [1, 3, 3],
    output: function (all: boolean) { return this.data }
};

// Union Types
let RealAge: number | string = 27;
RealAge = "27";

// Never Type
function NeverTyper(): never {
    throw new Error('test');
}
// NeverTyper();

// Nullable Types
let CanBeNull: number | null = 12;
CanBeNull = null;