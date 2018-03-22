export class Rectangle {

    private static instance: Rectangle;

    private constructor() { }

    static getInstance() {
        if (!Rectangle.instance) {
            Rectangle.instance = new Rectangle();
        }
        return Rectangle.instance;
    }

    calculateRectangule = (width: number, length: number): number => width * length

}