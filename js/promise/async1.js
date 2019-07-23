// async는 함수앞에 사용되어 함수를 비동기로 만든다.
// async는 반드시 await와 같이 사용하여야 한다.
// await 뒤에는 Promise가 와야하고, Promise가 그 결과를 리턴할때까지 기다린다.
// async 비동기 함수가 리턴된 결과를 받기 위해서 then 문을 연결할수 있다.

console.log('start');

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}


add1(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});

add1(10)

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
}

// Promise.all과 다르다. 두개가 순차적으로 동시에 실행
// add2(10).then(v => {
//   console.log(v);  // prints 60 after 2 seconds.
// });

console.log('end');
