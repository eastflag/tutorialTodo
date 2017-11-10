function person() {
    this.someValue = 2;
    var someValue2 = 3;
/*    return {
        name: 'charles'
    };*/
}

console.log(person());
console.log(new person());
console.log(someValue);
//console.log(someValue2);