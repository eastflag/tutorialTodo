varValue = 100;

var counter2 = {
    varValue: 0,
    increment: function() {
        this.varValue += 1;
    }
};
var inc = counter2.increment;
inc();
console.log(counter2.varValue);
console.log(varValue);