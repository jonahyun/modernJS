// Create Arrays
const numbers = [43,34,54,6,32,14,5];

// Create Using - Array constructors
const numbers2 = new Array(22,43,54,23,15)

const fruit = ['Apple', 'Peach', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if it array
val = Array.isArray(numbers);

// Get single value by putting in the position
val = numbers[3]; 
val = numbers[0];

// Insert into Array
numbers[2] = 100; // gets added as 3rd position in numbers array

// Find inddex of value
val = numbers.indexOf(32); // returns 4

// MUTATING ARRAYS
numbers.push(250); // Add onto end
numbers.unshift(120); // Add onto front

numbers.pop() // Take off from end
numbers.shift(); // Take off from front

numbers.splice(1,1); // Cuts it out. 
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting Arrays
val = fruit.sort();
val = numbers.sort(); // it will start with 1, so even if you have 100, it will be first.. fix below

// Sort - Use the "Compare function"
val = numbers.sort(function(x,y){
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x,y){
  return y - x;
});


// Find
function under50(num) {
  return num < 50;
};

val = numbers.find(under50); // this will give first number in the array under 50.. Comment out sort above to see it work.

//Output
console.log(numbers);
console.log(val);