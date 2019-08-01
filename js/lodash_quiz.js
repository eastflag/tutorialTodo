const _ = require('lodash');

var books = [
  {title: "Three Little Pigs", price: 20, author: "Jacobs", rank: 1},
  {title: "Alice in Wonderland", price: 25, author: "Carroll", rank: 2},
  {title: "Seven Dwarfs", price: 35, author: "Disney", rank: 3},
  {title: "Swallow's gift", price: 15, author: "Unknown", rank: 4},
];

let result;

// 1. Find the object whose title is  Alice in Wonderland.
// let result = _.find(books, book => book.title === '자바의 정석');
result = _.find(books, {title: '자바의 정석'});
console.log('1 ----------------------');
console.log(result);

// 2. Sum all the price of books array.
result = _.sum(_.map(books, 'price'));
console.log('2 ----------------------');
console.log(result);

// 3. Create a new array with rank < 3
result = _.filter(books, book => book.price > 30000);
console.log('3 ----------------------');
console.log(result);

// 4. After sorting first with title, create a new array with a rank number before a title
// the result is
// [ '1. Alice in Wonderland',
//   '2. Seven Dwarfs',
//   '3. Swallow\'s gift',
//   '4. Three Little Pigs' ]
result = _.chain(books)
  .sortBy('title')
  .map((book, index) => (index + 1) + '. ' + book.title).value();
console.log('4 ----------------------');
console.log(result);

// 5. Print the title of the most expensive book.
result = _.maxBy(books, 'price');
console.log(result.title);
