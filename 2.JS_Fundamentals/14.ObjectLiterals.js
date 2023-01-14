// Object Literals

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2023 - this.age;
  }
}
let val;



val = person; // returns object {firstName: 'Steve'}
val = person.firstName // retuns Steve - preferred method
val = person['firstName']; // also returns Steve

val = person.age; // 30
val = person.hobbies; // ['music', 'sports']
val = person.hobbies[1]; // sports
val = person.address; // {city: 'Miami', state: 'FL'}
val = person.address.city; // Miami
val = person.address['city']; // Miami - the other way

val = person.getBirthYear();

// Arrays of Objects
const people = [
  {name: 'John', age: 30},
  {name: 'Sarah', age: 22},
  {name: 'Angela', age: 31}
];

for (let i = 0; i< people.length; i++) {
  console.log(people[i].name);
};




// Output
console.log(val);