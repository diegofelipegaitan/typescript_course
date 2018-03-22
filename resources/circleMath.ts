namespace CircleMath{
    export class Algorithm {

        readonly PI: number = 3.1415;
        private static instance: Algorithm;

        private constructor() { }

        static getInstance() {
            if (!Algorithm.instance) {
                Algorithm.instance = new Algorithm();
            }
            return Algorithm.instance;
        }

        calculateCirc = (diameter: number): number => diameter * this.PI
        
    }
    
}