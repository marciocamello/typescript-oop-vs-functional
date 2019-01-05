function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
class CanSayHi {
    sayHi() {
        return `Hello, ${this.name}`;
    }
}
class HasSuperPower {
    superpower() {
        return `${this.heroName} 🔥🔥🔥`;
    }
}
class SuperHero {
    constructor(name) {
        this.name = name;
        this.heroName = `SUPER ${this.name}`;
    }
}
applyMixins(SuperHero, [CanSayHi, HasSuperPower]);
const ts = new SuperHero('TypeScript');
console.log(ts.superpower());
