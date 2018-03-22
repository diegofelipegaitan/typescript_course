export class Circle {

    readonly PI: number = 3.1415;
    private static instance: Circle;

    private constructor() { }

    static getInstance() {
        if (!Circle.instance) {
            Circle.instance = new Circle();
        }
        return Circle.instance;
    }

    calculateCirc = (diameter: number): number => diameter * this.PI

}