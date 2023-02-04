class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    // Standalone static method
    static addNumbers(x,y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-14-1980');

mary.getMarried('Thompson');

console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

// calling static method
console.log(Person.addNumbers(1,2)); // Gets 3
