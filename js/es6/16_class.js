// instance 멤버는 typescript에서만 존재. 인스턴스 멤버는 생성자에서 this로 만든다.
// public, protected, private 도 typescript에서만 존재

// Student 라는 이름의 클래스를 생성하시오.

// 생성자를 추가하시오.

// 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오

// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오

// changeName이라는 이름의 메서드를 추가하시오.
// 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.

// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
// 값이 바뀌었는지 출력해서 확인해보자

// 생성자의 역할은 무엇인가?
// 생성자에 사용된 this는 무엇을 가르키는가?

class Student {
  constructor(name) {
    this.name = name;
  }

  changeName(userName) {
    this.name = userName;
  }
}

let user1 = new Student("Jane");
console.log(user1);

user1.changeName("Tom");

console.log(user1);
