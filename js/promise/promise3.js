//Promise.resolve 는 비동기처리가 안된다 그래서 ok가 먼저 출력되고 async가 나중에 출력된다.
/*Promise.resolve(
    setTimeout(()=>{
        console.log('async setTimeout');
    }, 1000)
).then(()=>{
    console.log('ok');
});*/

new Promise(resolve=> {
    setTimeout(() => {
        console.log('async setTimeout');
        resolve('ok')
    }, 1000)
}).then((value)=>{
    console.log(value);
});