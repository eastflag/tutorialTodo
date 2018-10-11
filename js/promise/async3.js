function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var total = 5;
console.log('start');

// 동시 실행
// upload();

// Promise.all과 같다. async 안에 await가 여러개 존재
asyncupload().then(() => console.log('async end'));


console.log('end');

// 루프를 중간에 멈추기
setTimeout(() => total = 2, 2500);


function upload() {
  for (let i=0; i<10; ++i) {
    resolveAfter2Seconds(i).then(result => console.log(i, result));
  }
}


async function asyncupload() {
  for (let i=0; i < total; ++i) {
    let result = await resolveAfter2Seconds(i);
    console.log(result);
  }
}
