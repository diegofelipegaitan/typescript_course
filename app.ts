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