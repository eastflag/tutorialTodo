let async1 = function (param) {
  return new Promise((resolve, reject)=>{
     if(param && param > 0) {
         resolve('positive');
     } else if(param && param < 0) {
         reject('nagative');
     } else {
         throw 'error';
     }
  });
};

async1(0)
    .then(value=> console.log(value), value=>console.log(value));

async1(0)
    .then(value=> console.log(value))
    .catch(value=> console.log(value));

async1(0)
    .then(value=> {
        console.log('res:' + value);
        JSON.parse(value);
    })
    .catch(value=>console.log('catch:' + value));