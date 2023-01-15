// MAP ---------------------------------------------------------- //
// Creating new arrays of anything from current array

// Create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);

// TEST
const testArray = companies.map(function(company) {
    return `${company.name} - [Started: ${company.start}, Ended: ${company.end}]`;
});

//const testArray = companies.map(company => `${company.name} - [Started: ${company.start}, Ended: ${company.end}]`);
console.log(testArray);

// Map AGE - Examples
const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

// Map AGE - More Examples
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);



// SORT ---------------------------------------------------------- //

// Sort ages
const sortAges = ages.sort(); // ISSUE - there will be issue with single digit # vs double. 

const sortAgesCorrectVersion = ages.sort((a,b) => a - b); // ascending order // Decending will be b - a
console.log(sortAgesCorrectVersion);

// SORT - Company by Start Year
const sortedCompanies = companies.sort(function(companyA, companyB){
    if(companyA.start > companyB.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);

// Sort - Company by End Year - Using Ternary Operator
const sortedCompanies2 = companies.sort((a,b) => (a.end > b.end) ? 1 : -1);
console.log(sortedCompanies2);


// REDUCE ---------------------------------------------------------- //
// It can be used for a lot of things. Below, we are going to add all the age numbers together

// Adding all Ages together from Ages Array

// For Loop Way
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
};
console.log("1. For Loop - Total Age is: " + ageSum);

// Reduce Way
const ageSum2 = ages.reduce(function(total, age){
    return total + age;
}, 0);
console.log("2. Reduce - Total Age is " + ageSum2);

// Reduce Way - Arrow Function
const ageSum3 = ages.reduce((total, age) => total + age, 0);
console.log("3. Reduce (Arrow Function) - Total Age is " + ageSum3);


// REDUCE - Years of Experience
const yearsOfExperience1 = companies.reduce(function(total, company){
    return total + (company.end - company.start);
},0);
console.log("Jona, you have " + yearsOfExperience1 + " years of experience");

// REDUCE - Using Arrow function
const yearsOfExperience2 = companies.reduce((total, company) => total + (company.end - company.start),0);
console.log("Jona, you have " + yearsOfExperience2 + " years of experience");


