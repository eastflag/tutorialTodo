function add(c, d){
    return this.a + this.b + c + d;
}

var o = {a:1, b:3};

console.log(add.call(o, 5)); // 1 + 3 + 5 + null = NaN
console.log(add.call(o, 5, 7)); // 1 + 3 + 5 + 7 = 16
console.log(add.call(o, 5, 7, 9)); // 1 + 3 + 5 + 7 = 16
