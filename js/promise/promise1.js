// 1. promise 개념 : 비동기를 순차적으로 처리한다.
// 2. promise를 만드는 2가지 방법과 그 차이점 알기
// 3. promise를 사용하는 방법
// Promise: 약속된 미래의 데이터
// 약속된 미래의 데이터는 생성 될수도(resolve)  혹은 실패 할수도(reject) 있다.
// then(): 약속되 미래의 시간이 지난다면

//1)promise 를 만드는 방법 : 생성자함수
let promise = new Promise(resolve => {
    setTimeout(()=>{
        console.log('async setTimeout');
        resolve('success');
    }, 1000);
});
//Promise 생성자안의 펑션은 executor로써 선언과 동시에 실행된다.
//pending 상태 => resolve 상태 => settled 상태


promise.then(value=>{
  console.log(value);
});
