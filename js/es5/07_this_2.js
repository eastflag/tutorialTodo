/*function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);*/

var myCat = {
  type: 'Cat',
  legs: 4,
  logInfo: function() {
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}

// 리터럴 객체로 Animal 객체를 적으시오.
// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가?
myCat.logInfo();
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000);

// "The undefined has undefined legs" 출력
// setTimeout의 매개변수로 전달되었기 때문에 메소드는 객체로부터 분리 되어있고,
// 1초 뒤 함수 실행이 된다. logInfo가 함수로써 실행되기 때문에 여기서의 this는 전역 객체다.

