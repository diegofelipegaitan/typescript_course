function greet( person: {name: string}){
    console.log("Hello " + person.name );
}

function changeName( person: { name: string}){
    person.name = "Diego Felipe";
}

const person = {
    name: "Diego",
    age : 36
}
greet( person );
changeName( person );
greet( person );