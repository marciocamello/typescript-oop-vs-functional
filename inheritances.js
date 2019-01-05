class Human {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hello, ${this.name}`;
    }
}
const patrick = new Human('Patrick Mullot');
console.log(patrick.sayHi());
class SuperHuman extends Human {
    constructor(name) {
        super(name);
        this.heroName = `HERO ${name}`;
    }
    superpower() {
        return `${this.heroName} pops treys 🔥🏀🏀🏀🏀`;
    }
}
const steph = new SuperHuman('Steph Curry');
console.log(steph.sayHi());
console.log(steph.superpower());
