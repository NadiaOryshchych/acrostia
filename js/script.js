var name = 'Jhon';

if (name) {
  console.log(surname);
  let surname = 'Doe';
}


const age = 22;
const man = {
  name: 'Jhon',
  surname: 'Doe',
  age
};

man.age = 23;
man.name = "Peter";
console.log(man.age);
console.log(man.name);

age = 24;
console.log(age);


let numbers = new Set([1, 2, 3, 4, 5]);
numbers.add(6);
numbers.add(...[5, 4, 3, 2, 1]);
console.log([...numbers].length);

const obj = {
  value: 3,
  valueOf() {
    return 1;
  },
  toString() {
    return 2;
  }
}
console.log(+obj == '2');

const student = {
  name: 'Jhon Doe',
  age: 16,
  scores: {
    math: 4,
    english: 5
  }
};

function display({
  name,
  scores: {
    math,
    geography = 2,
    english = 0
  }
}) {
  console.log(
    `Hello, ${name}
    Your Maths score is ${math},
    Your Geography score is ${geography},
    Your English score is ${english}`
  );
}
display(student);


(function display(first, second, ...others) {
  console.log(`My choice is ${others[1]}`);
})('Jhon', 'Peter', 'Andre', 'Simon', 'Alex');


var objA = {
  name: 'Jhon',
  age: 22
};
var objB = objA;
objB.name = 'Peter';
objA.age = 25;
var objC = {
  ...objB,
  ...{
    age: 28
  }
};
objC.name = "Alex";
var objD = Object.assign({
  surname: 'Smith'
}, objC, {
  age: 30
});
objD.name = 'Max';
console.log(objA, objB, objC, objD);


var objA = {
  data: 1,
  set value(data) {
    this.data = data * 2;
  },
  get value() {
    return this.data - 1;
  }
};
var objB = {
  data: 1,
  set value(data) {
    this.data = data - 5;
  },
  get value() {
    return this.data + 10;
  }
}
objB.data = objA.value - 5;
console.log(objB.value);


for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}


var module = (function () {
  var name = 'Jhon';
  return {
    getName() {
      return name;
    }
  }
})();
module.name = 'Peter';
console.log(module.getName());


// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

function sum(a) {
  return function (b) {
    return a + b;
  };

}
console.log(sum(4)(2));

// https://jsfiddle.net/c8t0n91z/4/

let sum = 0;
let arr = [];

function filterArr(...params) {
  params.map((el) => {
    if (el % 2 == 0) {
      sum = sum + el;
      arr = [el, ...arr];
      return
    }
  });
}
filterArr(2, 4, 1, 1, 3, 2);
console.log(sum);
console.log(arr);

// https://jsfiddle.net/aeu15nvz/


// function showNumbers(...params) {
//   let arr = [params];
//   return function () {
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//       setTimeout(arguments.callee, 2000);
//     }
//   }();
// }
// showNumbers(1, 3, 5, 3, 2)
// https://jsfiddle.net/9pgkhcf6/