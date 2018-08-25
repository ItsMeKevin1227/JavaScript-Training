const newFunction = timeout =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('成功');
    }, timeout);
    if (timeout === 0) {
      rej(new Error('失敗'));
    }
  });

newFunction(1000)
  .then((response) => {
    console.log('success', response);
    return newFunction(2000);
  })
  .then((response) => {
    console.log('success2', response);
  })
  .catch((err) => {
    console.log('failed', err);
  });
