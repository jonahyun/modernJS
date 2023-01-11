const num1 = 100;
const num2 = 50;
let val;

// Simple math operators
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0

// Math Objects
val = Math.PI; // 3.14159..
val = Math.E; // 
val = Math.round(2.8); // rounding 3
val = Math.ceil (2.2); // round up: 3
val = Math.floor (2.8); // round down: 2
val = Math.sqrt(64); // square root 8
val = Math.abs(-3); // absolute: 3
val = Math.pow(8,2); // power of: 16
val = Math.min(2,33,4,2,1,5); // gives minimum number: 1
val = Math.max(2,33,4,2,1,5); // gives minimum number: 33

// Random Number
val = Math.random(); // gives random decimal number
val = Math.floor(Math.random() * 20 + 1); // gives random number 1 - 20

// Output
console.log(val);