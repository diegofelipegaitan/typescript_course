interface NamePerson {
    name: string;
    age?: number;
    [propName: string]: any;

    greet(lastName: string): void;
}

function greet( person: NamePerson){
    console.log("Hello " + person.name );
    console.log( person.propName );
}

function changeName( person: NamePerson){
    person.name = "Diego Felipe";
}

const person: NamePerson = {
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
