// Example
var array = ['A', 'B', 'C', 'D', 'E'];

// length
console.log(array.length);
// 5

// push
console.log(array.push('F'));
// 6
console.log(array);
// [ 'A', 'B', 'C', 'D', 'E', 'F']

// pop
console.log(array.pop());
// "F"
console.log(array);
// [ 'A', 'B', 'C', 'D', 'E']

// unshift 從陣列最前加入一個 element
console.log(array.unshift('F')); // 6
console.log(array);
// [ 'F', 'A', 'B', 'C', 'D', 'E']

// shift 從陣列最前移除一個 element
console.log(array.shift());
// "F"
console.log(array);
// [ 'A', 'B', 'C', 'D', 'E']

// slice 取出陣列指定index(不會改變原陣列)
console.log(array.slice(2, 4));
// ["C", "D"]

// splice(接合)(insert) 在陣列中指定位置插入(或替代為)一個 element
// arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
console.log(array.splice(3, 0, 'F'));
// []
console.log(array);
// [ 'A', 'B', 'C', 'F', 'D', 'E']

// splice(remove)在陣列中指定位置移除一個 element
console.log(array.splice(3, 1));
// ["F"]
console.log(array);
// [ 'A', 'B', 'C', 'D', 'E']

// indexOf
console.log(array.indexOf('D'));
// 3

// lastIndexOf return最後一個被找到之索引
console.log(array.lastIndexOf('D'));
// 3

// join 陣列連接為字串
console.log(array.join(':'));
// "A:B:C:D:E"

// reverse(相反) 顛倒陣列
console.log(array.reverse());
// ["E", "D", "C", "B", "A"]

// sort
console.log(array.sort());
// ["A", "B", "C", "D", "E"]

// concat
console.log(array.concat(['G', 'H']));
// ["A", "B", "C", "D", "E", "G", "H"]

// 以下傳入function

// some 只要有一個符合(function)即回傳 true
console.log(array.some(item => item === 'C'));
// true

// every
console.log(array.every(item => item.length === 1));
// true

// forEach 遍歷陣列(無法終止)(回傳undefined)
array.forEach(item => console.log(item)),
  // reduce(處理累加)
  // array.reduce(callback[accumlator, currentValue, currentIndex, array], initialValue)
  console.log(array.reduce((prevItem, item) => prevItem + item));
// "ABCDE"

// More Example...
{
  array2 = [2, 3, 4];
  // 不傳 initialValue
  console.log(array2.reduce((pre, cur, index, arr) => pre + cur));
  // 9

  // 傳 initialValue
  console.log(array2.reduce((pre, cur, index, arr) => pre + cur, 10));
  // 19

  // 求乘積
  console.log(array2.reduce((pre, cur, index, arr) => pre * cur));
  // 24

  // 求最大值
  console.log(array2.reduce((pre, cur, index, arr) => (pre > cur ? pre : cur)));
  // 4
}

// reduceRight reduce 由右至左
console.log(array.reduceRight((prevItem, item) => prevItem + item));
// "EDCBA"

// map 建立一個新的陣列
console.log(array.map(item => item + item));
// ["AA", "BB", "CC", "DD", "EE"]

// filter 回傳符合 function 的 element
console.log(array.filter(item => item > 'C'));
// ["D", "E"]
