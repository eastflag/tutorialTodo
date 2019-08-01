// 1. This is a function expression with two input parameter.
// Convert anonymous function to arrow function. Only one line is enough.
var arrow_quiz = function (x, y) {
  return x + y;
}

// 2. This is a function expression with no parameter and object return.
// Only one line is enough. Complete arrow2
var arrow2 = function() {
  return {a: 1}
}

// 3. Put input parameter a, b, c in order, not at once.
// arrow3(1)(2)(3) execution result must be a 6
// Convert anonymous function to arrow function. Only one line is enough. This is called currying function.
var arrow3 = function(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}
console.log(arrow3(1)(2)(3));
arrow3 = a => b => c => a + b + c;
console.log(arrow3(1)(2)(3));
