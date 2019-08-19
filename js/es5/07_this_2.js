// 4. json this and lexical this
// json this is enclosing context's parent
var myCat = {
  type: 'Cat',
  legs: 4,
  logInfo: function() {
    console.log(this);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
myCat.logInfo();
// 아래 실행결과는 this.type, this.legs가 모두 undefined이다. 위와 같은 결과가 되도록 수정하시오.
myCat = {
  type: 'Cat',
  legs: 4,
  logInfo: function() {
    setTimeout(function() {
      // this is global object
      console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    }, 1000);
  }
}
myCat.logInfo();

// setTimeout 펑션은 큐에서 실해오디고 parent는 global 객체를 가르키게 된다.
// 애로우 펑션은 실행순서와는 상관없이 현재 문법 그대로 lexical로 바인딩한다.
// 현재의 enclosing context 의 부모는 myCat을 가르키게 된다.
myCat = {
  type: 'Cat',
  legs: 4,
  logInfo: function() { // <-- enclosing context
    setTimeout(() => {
      // this is global object
      console.log('The ' + this.type + ' has ' + this.legs + ' legs');
    }, 1000);
  }
}

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000);

// "The undefined has undefined legs" 출력
// setTimeout의 매개변수로 전달되었기 때문에 메소드는 객체로부터 분리 되어있고,
// 1초 뒤 함수 실행이 된다. logInfo가 함수로써 실행되기 때문에 여기서의 this는 전역 객체다.

