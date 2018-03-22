namespace RectangleMath{

    export class Algorithm {

        private static instance: Algorithm;

        private constructor() { }

        static getInstance() {
            if (!Algorithm.instance) {
                Algorithm.instance = new Algorithm();
            }
            return Algorithm.instance;
        }

        calculateRectangule = (width: number, length: number): number => width * length

    }

}