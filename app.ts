class Person {

    protected typePerson: string;
    private age: number = 26;

    public get $typePerson(): string {
        return this.typePerson;
    }

    public set $typePerson(value: string) {
        this.typePerson = value;
    }

    public get $age(): number {
        return this.age;
    }

    public set $age(value: number) {
        this.age = value;
    }

    constructor(public name: string, public username: string) {
    }

    printAge() {
        console.log(this.age);
    }
}

const person = new Person("Diego", "proimond");
person.$typePerson = "Diego";
console.log(person);


class Diego extends Person {
    name = "Felipe;";

    constructor(username: string) {
        super('5555', username);
    }

}

const diego = new Diego("proimond81");
diego.$age = 36;
diego.$typePerson = "nice";
diego.printAge();
console.log("Diego");

class Plant {

    private _species: string = "Algo";

    public get species(): string {
        return `Hey, i'm a ${this._species}`;
    }

    public set species(value: string) {
        this._species = value;
    }

}

const plant = new Plant();
console.log(plant.species);
plant.species = "NEW ONE";
console.log(plant.species);

class Helpers {
    static PI: number = 3.1415;

    static calCirc(diameter: number): number {
        return this.PI * diameter;
    }

}

console.log(Helpers.PI);
console.log(Helpers.calCirc(2.453));

abstract class Project {

    projectName: string = "Angular Project";
    numberHours: number = 5;

    calHours(days: number): number {
        return this.numberHours * days;
    }

    abstract chancheName(name: string): void;

}

class IpPoject extends Project {

    chancheName(name: string) {
        this.projectName = name;
    }

}

const myProject = new IpPoject();
console.log(myProject);
myProject.chancheName("NEW");
console.log(myProject.projectName);
console.log(myProject.calHours(5));

class OnlyOne {

    private static instance: OnlyOne;

    private constructor(public /* readonly para variables de solo lectura */ readonly name: string) { }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('Only One');
        }
        return OnlyOne.instance;
    }

}

let onlyOne = OnlyOne.getInstance();
console.log(onlyOne);