const calculator = (...args) => {
  const arr = [...args];

  const plus = (arr) => arr.reduce((acc, val) => acc + val, 0);

  return Object.freeze({
    arr,
    plus,
  });
};

export default calculator;
