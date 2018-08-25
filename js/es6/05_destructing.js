// destructing assignment
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// 배열 비구조화 할당
let x = [1, 2, 3, 4, 5];
let [y, z] = x;

console.log(y + z);

//2. 객체 비구조화 할당
//2.1 기본할당
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

//2.2 선언없는 할당: ()는 없으면 안된다. {a,b} 라는게 존재 하지 않는다.
var a, b;
({a, b} = {a: 1, b: 2});
console.log(a, b);
//or
var {c, d} = {c:1, d:2};
console.log(c, d);

//2.3 기본값
var {e = 10, f = 5} = {e: 3};

console.log(e, f); // 3 5

//2.4 할당과 기본값
var {g:aa = 10, h:bb = 5} = {g: 3};

console.log(aa, bb); // 3 5

//2.5 함수의 기본값 매개변수(es5)와 할당
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // 이제 드디어 차트 그리기 수행
}
//es6
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
  console.log(size, cords, radius);
  // 차트 그리기 수행
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
drawES2015Chart();
