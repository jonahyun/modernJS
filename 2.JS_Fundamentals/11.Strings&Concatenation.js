const firstName = "Williams";
const lastName = "Johnson";
const age = 46;
const str = 'Hello there my name is Cisol';
const tags = 'web design, webd development, programming';

let val;

val = firstName + lastName; 

// Concatenation
val = firstName + " " + lastName; // Williams Johnson

// Append - Add onto it
val = 'Brad ';
val += 'Traversy'; // Bran Traversy

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait";  // Use double quotes wrapping single quote
val = 'That\'s awesome, I can\'t wait';  // Using backslash

// Length
val = firstName.length; // 7

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase(); // WILLIAMS
val = firstName.toLowerCase(); // willaims

val = firstName[2]; // take index starting with 0 - so 2 will return 'l'

// indexOf()
val = firstName.indexOf('l'); // It will give 2
val = firstName.lastIndexOf('l'); // It will start at opposite end and gives 3

// CharAt()
val = firstName.charAt('2'); // l 
// Get las char
val = firstName.charAt(firstName.length - 1); // it returns 's'

// Substring()
val = firstName.substring(0,4); // Will

// slice() - usually used with arrays but can be used with strings
val = firstName.slice(0,4); // Will
val = firstName.slice(-3);  // starts from back and gives 'ams' from Willaims

// split() = separate string into array based on separator
val = str.split(' '); // split on spaces - (6) ['Hello', 'there', 'my', 'name', 'is', 'Cisol']
val = tags.split(','); // splitting on comma  - example tag form entry

// replace()
val = str.replace('Cisol', 'Jack'); // Replace letter or word

// includes()
val = str.includes('Hello'); // returns true - tests if it's included

// Output
console.log(val);