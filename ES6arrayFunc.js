window.addEventListener('load', () => {
  // ES6 Array Function

  // for (舊方法)
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr1.length; i += i) {
    console.log(arr1[i]);
  }

  // ForEach 不回傳值
  arr1.forEach((el, idx, array) => {
    // array.forEach((element, idx, array)=>{})
    console.log(el, idx, array);
  });

  // Filter 用來過濾陣列中符合條件的物件 true的加入新陣列
  const filterArr = arr1.filter((el, idx, array) => el > 5);
  console.log(`filterArr = ${filterArr}`);

  // Find 用來搜尋陣列中符合條件的物件，且僅能有一個(第一個)
  const findArr = arr1.find((el, idx, array) => el > 5);
  console.log(`findArr = ${findArr}`);

  // Map 回傳 return 的物件、值，功用上是用來處理陣列回傳新值產生一個新陣列。
  // 留空的 return 則會產生 undefined。
  const mapArr2 = arr1.map((el, idx, array) => {
    el += 500; // 每個 money + 500
    return el; // 回傳物件
  });
  console.log(`mapArr2 = ${mapArr2}`);
  console.log(`arr1 = ${arr1}`);

  // Every 驗證全部的結果，當全部的值都為 true 時，則最終會得到 true；只要其中之一為 false，則回傳為 false。
  const everyAns = arr1.every((el, idx, array) => el > 5);
  console.log(everyAns);

  // Some 只要部分為 true，則回傳為 true；全部為 false 則才會為 false。
  const someAns = arr1.some((el, idx, array) => el > 5);
  console.log(someAns);

  // Reduce 接收到前一個回傳的值供下一個物件使用，適合用在累加與比對上。
  // accumulator: 前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
  // currentValue: 當前變數
  // currentIndex: 當前索引
  // array: 全部陣列
  const reduceArr = arr1.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      console.log(
        `reduceArr = ${accumulator}`,
        currentValue,
        currentIndex,
        array,
      );
      return accumulator + currentValue;
    },
    0,
  ); // 傳入初始值為0
  console.log(reduceArr);

  const reduceArr2 = arr1.reduce(
    (accumulator, currentValue, currentIndex, array) =>
      Math.max(accumulator, currentValue), // 與前一個值比較哪個大
    0,
  ); // 傳入初始值為0
  console.log(reduceArr2);
});
