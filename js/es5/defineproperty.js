var obj1 = {};

/*
Object.defineProperty(obj1, "a", {value: 10});

obj1.a = 20;
console.log(obj1.a);
*/

Object.defineProperty(obj1, 'a', {
    value: 10,
    writable: true,  //default false
    enumerable: true, //default false
    configurable: true  //default false
});

obj1.a = 20;
console.log(obj1.a);