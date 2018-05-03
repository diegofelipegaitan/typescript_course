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