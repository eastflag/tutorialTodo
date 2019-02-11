// nickname 이라는 getter 를 추가하시오.
// 이 getter는 name이 5자이상이면 "longName", 이하면 "shortName"을 리턴한다.

// nickname을 출력해보자.

// teacher라는 이름을 가진 setter, getter 를 추가하자.
// setter는 name을 파라메터로 받아서 _teacher backing property에 저장하고
// getter 에서 이 backing property를 리턴한다.

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

  get teacher() {
    return this._teacher;
  }

  set teacher(name) {
    this._teacher = name;
  }
}

let user1 = new Student("Jane");
console.log(user1);

console.log(user1.nickname);

user1.teacher = 'JohnSon';
console.log(user1);
console.log(user1._teacher);


// getter 는 속성에는 없지만 속성과 동일하게 사용가능한 dynamic or computed property 이다.

// setter는 속성과 동일하게 사용가능하고 속성과 동일한 이름을 사용해서는 안된고, backing property를 사용해야 한다.
