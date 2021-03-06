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
  console.log(a);
  const b = await resolveAfter2Seconds(30);
  console.log(b);
  return x + a + b;
}

console.log(add1(10));

// 리턴값을 받아서 사용할려면 then 으로 연결
// add1(10).then(v => {
//   console.log(v);  // prints 60 after 4 seconds.
// });

// async function add2(x) {
//   const p_a = resolveAfter2Seconds(20);
//   const p_b = resolveAfter2Seconds(30);
//   return x + await p_a + await p_b;
// }

// Promise.all과 다르다. 두개가 순차적으로 동시에 실행
// add2(10).then(v => {
//   console.log(v);  // prints 60 after 2 seconds.
// });

console.log('end');
