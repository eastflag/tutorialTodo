const _ = require('lodash');

var books = [
  {title: "인사이드 자바스크립트", price: 18000, author: "송영주", publisher: "한빛미디어"},
  {title: "Vue.js 퀵 스타트", price: 30000, author: "원형섭", publisher: "루비페이퍼"},
  {title: "자바의 정석", price: 30000, author: "남궁성", publisher: "도우출판"},
  {title: "안드로이드 정복", price: 35000, author: "김상형", publisher: "한빛미디어"},
  {title: "Angular Essentials", price: 32000, author: "이웅모", publisher: "루비페이퍼"},
  {title: "모두의 파이썬", price: 12000, author: "이승찬", publisher: "길벗"},
  {title: "핸즈온 머신러닝", price: 33000, author: "오렐리앙 제롱", publisher: "한빛미디어"},
  {title: "새로운 CSS 레이아웃", price: 17000, author: "레이철 앤드루", publisher: "웹액츄얼리코리아"},
  {title: "러닝 리액트", price: 28000, author: "알렉스 뱅크스", publisher: "한빛미디어"},
];

let result;

// 1. 제목이 자바의 정석 찾기
// let result = _.find(books, book => book.title === '자바의 정석');
result = _.find(books, {title: '자바의 정석'});
console.log('1 ----------------------');
console.log(result);

// 2. 책의 비용 합계 구하기
result = _.sum(_.map(books, 'price'));
console.log('2 ----------------------');
console.log(result);

// 3. 3만원 이상 책 찾기
result = _.filter(books, book => book.price > 30000);
console.log('3 ----------------------');
console.log(result);

// 4. 제목을 가나다 순서로 소팅한후 제목앞에 소팅된 번호를 붙인 새로운 배열을 생성하시오
result = _.chain(books)
  .sortBy('title')
  .map((book, index) => (index + 1) + '. ' + book.title).value();
console.log('4 ----------------------');
console.log(result);
