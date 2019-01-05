const hasName = (name) => {
    return { name };
};
const canSayHi = (name) => {
    return {
        sayHi: () => `Hello, ${name}`
    };
};
const Person = function (name) {
    return {
        ...hasName(name),
        ...canSayHi(name)
    };
};
const hi = Person('Jeff');
console.log(hi.sayHi());
