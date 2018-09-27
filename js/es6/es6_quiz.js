let book = {title: "인사이드 자바스크립트", price: 18000, author: "송영주", publisher: "한빛미디어"};

let array = [
  {id: 1, name: 'aaa'},
  {id: 2, name: 'bbb'},
  {id: 3, name: 'ccc'},
  {id: 4, name: 'ddd'},
  {id: 5, name: 'eee'},
  {id: 6, name: 'fff'},
  {id: 7, name: 'ggg'},
  {id: 8, name: 'hhh'},
  {id: 9, name: 'iii'},
];

// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// 이런 카피를 머라고 부르는가?
let copyBook = book;
copyBook.price = 20000;
console.log(book);
console.log(copyBook);

// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
console.log('2 -------------------------------------------------------------------');
// 2-1 Object.assign() 사용하여 deep copy하기
let deepCopyBookEs5;
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
let deepCopyBookEs6;

console.log(book);
console.log(deepCopyBookEs5);
console.log(deepCopyBookEs6);

// 3. destructing을 사용하여 book의 title, author 변수를 한번에 받는 코드를 작성하시오.
console.log('3 -------------------------------------------------------------------');

console.log(title, author);

// 4. id가 2의 배수의 집합인 A를 구하시오. id가 3의 배수의 집합인 B를 구하시오.
console.log('4 -------------------------------------------------------------------');
let A;
let B;
console.log(A);
console.log(B);

// 5. 교집합 구하기 A & B
console.log('5 -------------------------------------------------------------------');
let intersection;
console.log(intersection);

// 6. 차집합 구하기 A - B
console.log('6 -------------------------------------------------------------------');
let difference;
console.log(difference);

// 7. es6의 Set 객체를 사용하여 A와 B의 합집합을 구하시오
console.log('7 -------------------------------------------------------------------');
// let a = new Set([1,2,3]);
// let b = new Set([4,3,2]);
// let union = new Set([...a, ...b]);

console.log(union);
// [ { id: 2, name: 'bbb' },
//   { id: 4, name: 'ddd' },
//   { id: 6, name: 'fff' },
//   { id: 8, name: 'hhh' },
//   { id: 3, name: 'ccc' },
//   { id: 9, name: 'iii' } ]


// 8. id가 4의 배수의 배열을 구하되 아래와 같이 name 키가 아니라 name + id 로 구성된 배열을를 구하시오.
// [hint]: computed property
console.log('8 -------------------------------------------------------------------');
let C;
console.log(C);
// [ { id: 4, name4: 'ddd' }, { id: 8, name8: 'hhh' } ]



/*


// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// 이런 카피를 머라고 부르는가?
let copyBook = book;
copyBook.price = 20000;
console.log(book);
console.log(copyBook);

// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
console.log('2 -------------------------------------------------------------------');
// 2-1 Object.assign() 사용하여 deep copy하기
let deepCopyBookEs5 = Object.assign({}, book, {price: 30000});
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
let deepCopyBookEs6 = {...book, ...{price: 30000}};

console.log(book);
console.log(deepCopyBookEs5);
console.log(deepCopyBookEs6);

// 3. destructing을 사용하여 book의 title, author 변수를 한번에 받는 코드를 작성하시오.
console.log('3 -------------------------------------------------------------------');
let {title, author} = book;
console.log(title, author);

// 4. id가 2의 배수의 집합인 A를 구하시오. id가 3의 배수의 집합인 B를 구하시오.
console.log('4 -------------------------------------------------------------------');
let A = array.filter(item => item.id % 2 === 0);
let B = array.filter(item => item.id % 3 === 0);
console.log(A);
console.log(B);

// 5. 교집합 구하기 A & B
console.log('5 -------------------------------------------------------------------');
let intersection = A.filter(item => B.indexOf(item) >= 0);
console.log(intersection);

// 6. 차집합 구하기 A - B
console.log('6 -------------------------------------------------------------------');
let difference = A.filter(item => B.indexOf(item) < 0);
console.log(difference);

// 7. es6의 Set 객체를 사용하여 A와 B의 합집합을 구하시오
console.log('7 -------------------------------------------------------------------');
// let a = new Set([1,2,3]);
// let b = new Set([4,3,2]);
// let union = new Set([...a, ...b]);
let setA = new Set(A);
let setB = new Set(B);

let setUnion =  new Set([...setA, ...setB]);
let union = [...setUnion];
console.log(union);
// [ { id: 2, name: 'bbb' },
//   { id: 4, name: 'ddd' },
//   { id: 6, name: 'fff' },
//   { id: 8, name: 'hhh' },
//   { id: 3, name: 'ccc' },
//   { id: 9, name: 'iii' } ]


// 8. id가 4의 배수의 배열을 구하되 아래와 같이 name 키가 아니라 name + id 로 구성된 배열을를 구하시오.
// [hint]: computed property
console.log('8 -------------------------------------------------------------------');
let C = array.filter(item => {
  if (item.id % 4 === 0) {
    item['name' + item.id] = item.name;
    delete item.name;
    return item;
  }
});
console.log(C);
// [ { id: 4, name4: 'ddd' }, { id: 8, name8: 'hhh' } ]*/
