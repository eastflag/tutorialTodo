// 자바스크립트에서 this는 실행문맥에 따라서 그 의미가 각각 다르다.
// 함수 실행:
//    함수 실행에서의 this는 전역 객체다.
//    엄격 모드에서 함수 실행에서의 this는 undefined다.
//    내부 함수에서의 this는 실행문맥에 따라 다르다
// 생성자 실행: 자기 자신
// 메소드 실행
//    this는 메소드 실행에서 메소드를 소유하고 있는 객체
//    주의: 메서드가 객체로부터 분리될때
// 간접 실행: alert.call(undefined, 'Hello World!')

function person() {
  this.arms = 2;
  this.legs = 2;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(person());
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
console.log(arms);

