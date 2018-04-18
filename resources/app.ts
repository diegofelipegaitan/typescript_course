interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any;

    greet(lastName: string): void;
}

function greet( person: NamedPerson){
    console.log("Hello " + person.name );
    console.log( person.propName );
}

function changeName( person: NamedPerson){
    person.name = "Diego Felipe";
}

const person: NamedPerson = {
    name: "Diego",
    hobbies: ['read','tv','bicycle'],

    greet( lastName: string ){
        console.log( "Hello "+ lastName );
    }
}
greet( person );
changeName( person );
greet( person );
person.greet( "ME" );

class Person implements NamedPerson{

    constructor( public name : string ){ }

    greet( lastName: string){
        console.log( "HELLO "+ this.name + " "  + lastName );
    }

}

const diego = new Person( "Diego" );
console.log( diego );
diego.greet( "Gaitán" );
