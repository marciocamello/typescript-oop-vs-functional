interface Person {
    first: string;
    last: string;
    [key: string]: any;
}

const person: Person = {
    first: 'Jeff', 
    last: 'Delaney'
}

const person2: Person = {
    first: 'Usain', 
    last: 'Bolt',
    fast: true
}

function pow(x:number, y:number): void {

    Math.pow(x, y).toString();
}

pow(23, 34);

type MyList = [number?, string?, boolean?];

const arr: MyList = [];

arr.push(1);
arr.push('23');
arr.push(false);

class Observable<T> {
    constructor(public value: T) { }
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);