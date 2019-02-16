// arrow 펑션과 lexical function
// 1,2,3 출력 되도록 수정하시오.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
/*function Person() {
    // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
    this.age = 0;

    setInterval(function growUp() {
        // 비엄격 모드에서, growUp() 함수는 `this`를
        // 전역 객체로 정의하고, 이는 Person() 생성자에
        // 정의된 `this`와 다름.
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p = new Person();*/

/*function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| 는 정확히 person 객체를 참조
        console.log(this.age);
    }, 1000);
}

var p = new Person();*/

/*const res = function(a) {
  return function(b) {
    return a + b;
  }
}*/

// curring function

// res는 펑션이다. a => (b => a + b)
// a를 입력했더니 function이 리턴되고 그 function에 b를 입력했더니 a + b가 리턴된다.는 의미
const res = a => b => a + b;
console.log(res(1)(2));


const res2 = a => b => c => {
  console.log(a, b, c);
  return a + b + c;
}
console.log(res2(1)(2)(3));

const res3= a => b => c => {
  return a + b(c);
}

console.log(res3(1)(() => 2)(3));
