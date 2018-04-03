interface NamePerson {
    name: string
}

function greet( person: NamePerson){
    console.log("Hello " + person.name );
}

function changeName( person: NamePerson){
    person.name = "Diego Felipe";
}

const person = {
    name: "Diego",
    age : 36
}
greet( person );
changeName( person );
greet( person );