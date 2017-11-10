var counter1 = {
    val: 0,
    increment: function() {
        this.val += 1;
    }
};

counter1.increment();
console.log(counter1.val);
counter1['increment']();
console.log(counter1.val);
console.log(counter1);

function counter (){
    this.val = 1;
}

console.log(new counter());
