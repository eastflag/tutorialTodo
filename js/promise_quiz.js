let async1 = function (param) {
  return new Promise((resolve, reject)=>{
    if(param && param > 0) {
      resolve('positive');
    } else if(param && param < 0) {
      reject('nagative');
    } else if(param === 0) {
      throw 'error';
    } else {
      // nothing
    }
  });
};

// 1. When you call async1(1), complete a promise pattern to print positive. Use then
async1(1).then(value => console.log(value));

// 2. When you call async1(-1), complete a promise pattern to print nagative. Use then
async1(-1).then(value => console.log(value), value => console.log(value));

// 3. When you call async1(0), complete a promise pattern to print error. Use catch.
async1(0)
  .then(value => console.log(value), value => console.log(value))
  .catch(value => console.log(value));

// 4. When you call async1('a'), nothing prints. What is the reason?
async1('a')
  .then(value => console.log(value), value => console.log(value))
  .catch(value => console.log(value));

// 5. This is a callback pattern. A first Task takes 1 second and prints a. After first task, second task is the same,
// third task, forth task is the same.
// This callback pattern is called callback hell or callback triangle.
// Convert this pattern to Promise pattern. Wrap a Async function with Promise.
setTimeout(function(){
  console.log('a');
  setTimeout(function(){
    console.log('b');
    setTimeout(function(){
      console.log('c');
      setTimeout(function(){
        console.log('d');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

new Promise(resolve => {
  setTimeout(function(){
    console.log('a');
    resolve('a');
  }, 1000);
}).then(() => {
  return new Promise(resolve => {
    setTimeout(function(){
      console.log('b');
      resolve('b');
    }, 1000);
  });
}).then((b) => {
  return new Promise(resolve => {
    setTimeout(function(){
      console.log('c');
      resolve('c');
    }, 1000);
  });
}).then((b) => {
  return new Promise(resolve => {
    setTimeout(function(){
      console.log('d');
      resolve('d');
    }, 1000);
  });
})

// 6. We have three Promise. Run three Promise at the same time, not in sequence.
// Use Promise.all and then. The result must be [ 'a', 'b', 'c' ].
// Execution time is one second, not three second.
const promiseA = new Promise(resolve => {
  setTimeout(function(){
    console.log('a');
    resolve('a');
  }, 1000);
});

const promiseB = new Promise(resolve => {
  setTimeout(function(){
    console.log('b');
    resolve('b');
  }, 1000);
});

const promiseC = new Promise(resolve => {
  setTimeout(function(){
    console.log('c');
    resolve('c');
  }, 1000);
});

Promise.all([promiseA, promiseB, promiseC])
  .then((value) => console.log(value));

