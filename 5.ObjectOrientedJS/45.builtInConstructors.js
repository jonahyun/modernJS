// Below examples are using primitives as objects but not a practical use. Avoid below but know you can

// String
const name1 = 'Jeff'; // String
const name2 = new String('Jeff'); // This becomes object


//name2.food = bar;
console.log(name2);

console.log(typeof name1);


// Below code output YES
if(name1 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('no');
}

// Below code output NO because it's a object, if you use == sign then it will be YES
if(name2 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('no');
}




// Number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2); // number object


// Boolean
const bool1 = true;
const bool2 = new Boolean(true);  // Gets object
console.log(typeof bool2); 

// Function
const getSum1 = function(x, y) {
  return x + y;
}

// Weird FUnction
const getSum2 = new Function('x', 'y', 'return 1 + 1'); // Returns 2
console.log(getSum2(1,1));

// Objects
const john1 = {name: "John"};
const john2 = new Object({name: "John"});  // Returns Object
console.log(john2);


// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);


// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // you have to escape the backslash 
console.log(re2); 