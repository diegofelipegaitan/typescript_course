class MyMap<T>{
    private map: { [key: string]: T } = {};

    setItem(key: string, item: T): void {
        this.map[key] = item;
    }

    getItem(key: string): T {
        return this.map[key];
    }

    clear() {
        this.map = {}
    }

    printMap(){
        for( let key in this.map){
            console.log( key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem( "diego" , 36 );
numberMap.setItem( "adriana" , 37 );
numberMap.setItem( "lucas" , 5 );
numberMap.printMap();
console.log( numberMap.getItem( "diego" ));
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem( "uno" , "1" );
stringMap.setItem( "dos" , "2" );
console.log( stringMap.getItem( "dos") );
stringMap.printMap();