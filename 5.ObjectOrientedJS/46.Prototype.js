// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it
// Object.prototype
// Person.prototype

function Person(firstName,lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.geetUTCFullYear() - 1970);  
  // }
}

// Calculate Age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);  
}


// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}



// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Glenn', '8-12-90');
const mary = new Person('Mary', 'Jane', 'March 20, 1978');

console.log(john.calculateAge());
console.log(john.getFullName());
console.log(mary);
console.log(mary.getFullName());



