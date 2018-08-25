var myRe = /d(b+)d/g;

console.log(myRe.exec("cdbbdbsz"));

var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);

var reg = /([가-힣|0-9]+)\s([가-힣|0-9]+)\s([가-힣|0-9]+)/;

console.log("서울시 영등포구 1여의도동 1번지 12".match(reg)[0]);

console.log("서울시 영등포구 여의도동 1번지 12".replace(reg));
