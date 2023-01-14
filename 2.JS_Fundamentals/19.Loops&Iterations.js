// FOR LOOP

for(let i = 0; i < 10; i++) {
  if(i === 2) {
    console.log('For Loop: 2 is my favorite number');
    continue; //keep going with the loop and show the next iterations - does not show another 2
  }

  if (i === 5) {
    console.log('For Loop: Stop the loop');
    break; // breaks the loop
  }

  console.log('Number ' + i);
}


// WHILE LOOP
let i = 0;
while(i < 10) {
  console.log('While Loop: Number ' + i);
  i++;
}


// DO WHILE LOOP - Runs at least
let x = 100;
do {
  console.log('Number ' + x);
  i++;
} 
while(x < 10);


// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Tesla'];

// FOR LOOP
for (let i = 0; i < cars.length; i++) {
  console.log('For Loop: ' + cars[i]);
}

// FOREACH
cars.forEach(function(car){
  console.log('forEach: ' + car);
});

cars.forEach(function(car, index){
  console.log(`forEach with Index: ${index} : ${car}`);
});

cars.forEach(function(car, index, array){
  console.log(`forEach with Index and Array: ${index} : ${car}`);
  console.log(array);
});



// MAP
const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Sarah'},
  {id:3, name: 'Tommy'},
  {id:4, name: 'Abigail'}
];

const ids = users.map(function(user){ //similar to forEach
  return user.id;
});
console.log(ids); 


// FOR IN LOOP - often used in objects

const user = { 
  firstName: 'John',
  LastName: 'Doe',
  age: 40
};

for(let x in user){
  console.log(`For In Loop: ${x} : ${user[x]}`); // gives us key value pair
};