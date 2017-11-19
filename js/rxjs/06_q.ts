import {Observable} from "rxjs";

// 1 ~ 100000 사이 3또는 5의 배수의 갯수를 모두 구하시오.
Observable.range(1, 100000).filter((data: number) => data%3===0 || data%5===0).count().subscribe(data=> console.log(data));

Observable.range(1, 100).map((data: number) => (data.toString().match(/8/g) || []).length)
  .reduce((prev, curr) => prev + curr).subscribe(data => console.log(data));

Observable.range(1, 100000)
  .reduce((acc, x) => acc + (x.toString().match(/8/g) || []).length, 0)
  .subscribe(data => console.log(`1 ~ 100000 사이 숫자 중 8이 들어간 총 갯수는 '${data}'개 입니다.`));
