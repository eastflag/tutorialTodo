// 아래 실행결과를 예측하고 map과 forEach의 차이점을 설명하시오.
var items = ['1', '2', '3', '4', '5'];
var newItems = items.map(item => parseInt(item));
console.log(newItems);

var newItems2 = items.forEach(item => parseInt(item));
console.log(newItems2);
