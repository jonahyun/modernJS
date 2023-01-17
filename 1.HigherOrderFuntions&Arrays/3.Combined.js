// COMBINE METHODS ---------------------------------------------------------- //

const combined = ages
    .map(age => age * 2)        // times 2
    .filter(age => age >= 40)   // Over 40
    .sort((a,b) => a - b)       // sort accending
    .reduce((a,b) => a + b, 0); // combine and show sum of array values
    //.reduce((total, age) => total + age, 0)
console.log(combined);


// Playground
// Challenge - get companies worked between 2012-2018 that included Bonus


const triple = ages
    .map(age => age * 3)
    .sort((a,b) => a - b)
    .filter(age => age < 100)
    .reduce((a,b) => a + b, 0);

console.log(triple);