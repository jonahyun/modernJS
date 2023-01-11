let val;

// Number to String
val = String(5333);
val = String(4+4);

//Boolean to a String
val = String(true);

// Date to String
val = String(new Date());

// Array to String 
val = String([1, 2,3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
val = Number(true); // this will give 0
val = Number(false); // this will output 0
val = Number(null); // this will output 0
val = Number('hello'); // this will output NaN
val = Number([1,2,3]); // this will output NaN
val = parseInt('100.30'); // output 100
val = parseFloat('100.30'); // output 100.30 - if using integer, use this.

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);  // length only works on string
console.log(val.toFixed(2)); // converts number to a string - only works on numbers



// TYPE COHERSION
// Javascript converts it for us

const val1 = '5';
const val2 = 6
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum); // this becomes string: 56
