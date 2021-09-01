const run = (a) => console.log(`un $${a}`);

class Foo {
  constructor(test) {
    this.test = test;
  }
}

const arrowFunc = (a) => a * a;

const arr = [1, 2, 3, 4, 5];
const spreadOper = [...arr];

run(5);

// plugin-proposal-optional-chaining
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

// plugin-proposal-function-sent
function* generator() {
  console.log('Sent', yield);
  console.log('Yield', yield);
}

const iterator = generator();
iterator.next(1); // Logs "Sent 1"
iterator.next(2); // Logs "Yield 2"
