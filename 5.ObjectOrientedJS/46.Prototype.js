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
console.log(john.calculateAge());


// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
console.log(john.getFullName());


// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Glenn', '8-12-90');
const mary = new Person('Mary', 'Jane', 'March 20, 1978');

console.log(mary);
console.log(mary.getFullName());



