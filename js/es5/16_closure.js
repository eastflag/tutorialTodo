function init() {
  var name = "Mozilla"; //클로저, 외부에서 접근 불가능한 변수
  return function displayName() {
    console.log(name); // 부모 함수에서 선언된 변수를 사용한다
  }
}
init()();
