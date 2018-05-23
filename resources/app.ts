function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
 
    constructor(){
        console.log( 123 );
    }

}

// Factory

function logging(value: boolean) : any {
    return value ? logged : false;
}

@logging( true )
class Car {

}

// Advanced

function printable( constructorFn: Function ){
    constructorFn.prototype.print = function() {
        console.log( this );
    }
}

@printable
class Plant{
    name = "My Plant";
}

const plant = new Plant();
(<any>plant).print();