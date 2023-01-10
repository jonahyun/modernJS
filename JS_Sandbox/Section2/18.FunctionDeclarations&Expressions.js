// 1. FUNCTION DECLATIONS

function greet(firstName, lastName){
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('John', 'Doe'));

// Putting in default value
// ES5 - If you pass in parameters and don't put default value, then it will show as undefined 
function greeting(firstName, lastName) {
  if (firstName === undefined) {firstName = "John"}
  if (lastName === undefined) {lastName = "Doe"}
  return 'Hello ' + firstName + ' ' + lastName; 
}
console.log(greeting('Steve', 'Smith')); // overwrite default value

// ES6 - Putting in default value
function greeting(firstName = 'Jane', lastName = 'Doe') {
  return 'Hello ' + firstName + ' ' + lastName; 
}
console.log(greeting('Bobby', 'Knight')); // overwrite default value



// 2. FUNCTION EXPRESSIONS - Putting a function variable assignment

const square = function(x) {
  return x*x;
};
console.log(square(8));



// 3. IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// Function that you declare and run at the same time

(function() {
  console.log('IIFE: ran..');
})();

(function(name) {
  console.log('IIFE: Hello ' + name);
})('Jona');


// 4. PROPERTY METHODS
const todo = {
  add: function(){
    console.log('Property Methods: Add todo..');
  },
  Edit: function(id){
    console.log(`Property Methods: Edit todo ${id}`);
  }
}

// Define outside
todo.delete = function(){
  console.log('Property Methods: Delete to do');
}


todo.add();
todo.Edit(22);
todo.delete();