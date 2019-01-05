const person = {
    first: 'Jeff',
    last: 'Delaney'
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
};
function pow(x, y) {
    Math.pow(x, y).toString();
}
pow(23, 34);
const arr = [];
arr.push(1);
arr.push('23');
arr.push(false);
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
