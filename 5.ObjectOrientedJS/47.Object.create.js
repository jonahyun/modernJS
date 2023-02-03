const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

// Pattern 1
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
console.log(mary.greeting());

// Pattern 2
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Cisol'},
  lastName: {value: 'Hogan'},
  age: {value: 36}
});

console.log(brad);
console.log(brad.greetings);

