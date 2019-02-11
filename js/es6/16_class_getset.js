// nickname 이라는 getter 를 추가하시오.
// 이 getter는 name이 5자이상이면 "longName", 이하면 "shortName"을 리턴한다.

// nickname을 출력해보자.

// name 파라메터를 받아서 속성인 name에 대입하는 nickname이라는 이름의 setter 를 추가하시오.

// nickname setter를 사용하여 "Johnson"을 할당하시오.

// nickname getter를 다시 출력하자 무엇이 출력되는가?

class Student {
  constructor(name) {
    this.name = name;
  }

  changeName(userName) {
    this.name = userName;
  }

  get nickname() {
    if (this.name.length > 5) {
      return "longName";
    } else {
      return "shortName";
    }
  }

  set nickname(name) {
    this.name = name;
  }
}

let user1 = new Student("Jane");
console.log(user1);

user1.changeName("Tom");

console.log(user1);
console.log(user1.nickname);
user1.nickname = 'JohnSon';
console.log(user1.nickname);
