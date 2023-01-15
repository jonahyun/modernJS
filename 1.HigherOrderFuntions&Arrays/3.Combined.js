// COMBINE METHODS ---------------------------------------------------------- //

const combined = ages
    .map(age => age * 2)        // times 2
    .filter(age => age >= 40)   // Over 40
    .sort((a,b) => a - b)       // sort accending
    .reduce((total, age) => total + age, 0)
    // .reduce((a,b) => a + b, 0);
console.log(combined);


// Playground

const 