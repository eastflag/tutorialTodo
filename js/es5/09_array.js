/**
 * Created by eastflag on 2016-10-14.
 */
// 1. 아래의 내용을 리터럴 객체로 담는 array list를 생성하시오.
// title	                   price	author	        publisher
//---------------------------------------------------------------------------
// 인사이드 자바스크립트     18000	  송영주          한빛미디어
// Vue.js 퀵 스타트	         30000	  원형섭          루비페이퍼
// 자바의 정석               30000	  남궁성	          도우출판
// 안드로이드 정복           35000	  김상형	        한빛미디어
// Angular Essentials        32000  이웅모          루비페이퍼
// 모두의 파이썬             12000  이승찬          길벗
// 핸즈온 머신러닝           33000  오렐리앙 제롱   한빛미디어
// 새로운 CSS 레이아웃       17000  레이철 앤드루   웹액츄얼리코리아
// 러닝 리액트               28000  알렉스 뱅크스   한빛미디어
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

// 2. books의 type은 무엇인가? 자바스크립트의 타입은 몇가지가 있는가?


//3. books 배열의 맨 앞쪽에 "ECMAScript 6 길들이기 ", 20000, "나라얀 프루스티", "에이콘출판사" 를 추가하시오

console.log(books);

//4. 방금 맨 앞쪽에 추가한 것을 지우시오,

console.log(books);

// 5. 이번에는 books 배열의 맨 뒷쪽에 동일한 객체를 추가하시오.

console.log(books);

// 6. 방금 맨 뒤쪽에 추가한것을 지우시오,

console.log(books);


// 7. 이번에는 자바의정석과 안드로이드정복 사이에 삽입하시오.
console.log('7 -------------------------------------------------------------------');

console.log(books);

// 8. 방금 삽입한거를 삭제하시오.
console.log('8 -------------------------------------------------------------------');

console.log(books);


// 9. books 배열에서 제목이 자바의 정석인 객체를 찾아서 출력하시오
console.log('9 -------------------------------------------------------------------');
var tempBook;

console.log(tempBook);

// 10. 제목이 모두의 파이썬인 객체의 배열 인덱스를 찾으시오
console.log('10 -------------------------------------------------------------------');
let index;

console.log(index);

// 11. 책의 총 비용을 출력하시오
console.log('11 -----------------------------------------------');
var sum = 0;

console.log('sum:' + sum);

// 12. 가격이 3만원이상인것을 모아서 별도의 배열을 만드시오
console.log('12 -------------------------------------------------------------------');
var newFilter;

console.log(newFilter);

// 13. 제목을 가나다 순서로 소팅한후 제목앞에 소팅된 번호를 붙인 새로운 배열을 생성하시오
console.log('13 -------------------------------------------------------------------');
var tempBooks;

console.log(tempBooks);
// [ '1 Angular Essentials',
//   '2 Vue.js 퀵 스타트',
//   '3 러닝 리액트',
//   '4 모두의 파이썬',
//   '5 새로운 CSS 레이아웃',
//   '6 안드로이드 정복',
//   '7 인사이드 자바스크립트',
//   '8 자바의 정석',
//   '9 핸즈온 머신러닝' ]



/*
//3. books 배열의 맨 앞쪽에 "ECMAScript 6 길들이기 ", 20000, "나라얀 프루스티", "에이콘출판사" 를 추가하시오
books.unshift({title: "ECMAScript 6 길들이기 ", price: 20000, author: "나라얀 프루스티", publisher: "에이콘출판사"});
console.log(books);

//4. 방금 맨 앞쪽에 추가한 것을 지우시오,
books.shift();
console.log(books);

// 5. 이번에는 books 배열의 맨 뒷쪽에 동일한 객체를 추가하시오.
books.push({title: "ECMAScript 6 길들이기 ", price: 20000, author: "나라얀 프루스티", publisher: "에이콘출판사"});
console.log(books);

// 6. 방금 맨 뒤쪽에 추가한것을 지우시오,
books.pop();
console.log(books);


// 7. 이번에는 자바의정석과 안드로이드정복 사이에 삽입하시오.
console.log('7 -------------------------------------------------------------------');
books.splice(3, 0, {title: "ECMAScript 6 길들이기 ", price: 20000, author: "나라얀 프루스티", publisher: "에이콘출판사"});
console.log(books);

// 8. 방금 삽입한거를 삭제하시오.
console.log('8 -------------------------------------------------------------------');
books.splice(3, 1);
console.log(books);


// 9. books 배열에서 제목이 자바의 정석인 객체를 찾아서 출력하시오
console.log('9 -------------------------------------------------------------------');
var tempBook = books.find(item => item.title === '자바의 정석' ?  true : false);
console.log(tempBook);

// 10. 제목이 모두의 파이썬인 객체의 배열 인덱스를 찾으시오
console.log('10 -------------------------------------------------------------------');
let index = books.findIndex(item => item.title === '모두의 파이썬'?  true : false);
console.log(index);

// 11. 책의 총 비용을 출력하시오
console.log('11 -----------------------------------------------');
var sum = 0;
books.forEach(item => sum += item.price);
console.log('sum:' + sum);

// 12. 가격이 3만원이상인것을 모아서 별도의 배열을 만드시오
console.log('12 -------------------------------------------------------------------');
var newFilter = books.filter(function (item) {
  if(item.order <= 3) {
    return true;
  }
});
console.log(newFilter);

// 13. 제목을 가나다 순서로 소팅한후 제목앞에 소팅된 번호를 붙인 새로운 배열을 생성하시오
console.log('13 -------------------------------------------------------------------');
var tempBooks = books.sort((a, b) => a.title > b.title).map((item, index) => item.title = (index + 1) + " " + item.title);
console.log(tempBooks);*/
