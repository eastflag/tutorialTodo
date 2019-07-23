const _ = require('lodash');

const data = [20, 20, 20, 10, 10, 5]

const result = _.groupBy(data);

for (let key in result) {
  result[key] = result[key].length;
}

console.log(result);
