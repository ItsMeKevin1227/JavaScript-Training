const people1 = ['悟空', '達爾', '十七號'];
const people2 = ['比克', '布瑪', '悟天'];

const newArr = [...people1, ...people2];
console.log(...newArr);

const newFunction = function aa(a, ...b) {
  console.log(a, b);
};
newFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
