function quickSortArr(array) {
  if( array.length <= 1 ){
    return array;
  }

  let left = [];
  let right = [];
  let num = array.splice(0,1);

  array.forEach(element => {
    if(element > num){
      right.push(element)
    }else{
      left.push(element)
    }
  });

  return quickSortArr(left).concat(num, quickSortArr(right));
};
const arr = [77,68,79,87,1,4,5,3,54,24,26,9,78];
console.log(quickSortArr(arr));