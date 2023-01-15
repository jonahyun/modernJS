// https://www.youtube.com/watch?v=rRgD1yVwIvE

// HIGHER ORDER FUNCTIONS & ARRAYS
// LOOPS, FILTERS
// mySampleArray.js - script included in html file

// FOR LOOP
for (let i=0; i < companies.length; i++) {
    console.log(companies[i].name);
};

// FOREACH
companies.forEach(function(company, index){
    console.log(index, company.name);
});

// GET 21 and Over ----------------------------------------------- //

// FILTER 1. Using for loop
let canDrink1 = [];
for (let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink1.push(ages[i]);
    }
}
console.log("Filter Using For Loop: " + canDrink1);

// FILTER - using filter()
const canDrink2 = ages.filter(function(age){
    if (age >= 21) {
        return true;
    }
});
console.log("Filter: " + canDrink2);


// FILTER - using arrow function
const canDrink3 = ages.filter(age => age >= 21);
console.log("Filter - Arrow Function: " + canDrink3);


// FILTER COMPANIES ----------------------------------------------- //

const digitalAgency = companies.filter(function(company){
    if(company.industry === "Digital Agency") {
        return true;
    }
});
console.log(digitalAgency);

// FILTER - USING ARROW FUNCTION
const digitalAgency2 = companies.filter(company => company.industry === "Digital Agency");
console.log(digitalAgency2);

// FILTER COMPANIES WORKED in 2000s--------------------------------- //

const companies2000s = companies.filter(function(company) {
    if(company.start >= 2000 && company.end < 2010) {
        return true;
    };
});
// const companies2000s = companies.filter(company => (company.start >= 2000 && company.end < 2010));
console.log(companies2000s);


// FILTER COMPANIES THAT I WORKED 3 Years or More ------------------- //
const companies3yrs = companies.filter(function(company) {
    const threeOrMore = company.end - company.start;
    if(threeOrMore >= 3) {
        return true;
    }
});
// const companies3yrs = companies.filter(company => (company.end - company.start) >= 3);
console.log(companies3yrs);

