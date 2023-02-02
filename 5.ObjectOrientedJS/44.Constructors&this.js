// Person constructor
function Person(name, dob) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.geetUTCFullYear() - 1970);  
 
  }
}

// const tom = new Person('Tom', 36);
// const john = new Person('John', 24);
// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad);